import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getRequest, postRequest} from "../utils/axios";
import ServicesCard from "../components/ServicesCard";
import {Box, Typography} from "@mui/material";
import {Mechanic} from "../utils/types";
import {calculateDistance, getCurrentLocation, Location,} from "../utils/location";
import RatingDisplay from "../components/rating";
import AddRatingModal from "../components/rating-model";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";

const MechanicProfile = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState<Mechanic>();
    const [currentLocation, setCurrentLocation] = useState<Location>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveRating = async (rating: number) => {
        try {
            await postRequest("/rating", {
                to: profile?.id,
                stars: rating,
            })
            toast.success("Added Sucessfull")
        } catch (e) {
            toast.error("Cannot Add Rating")
        }
    };

    useEffect(() => {
        if (id) {
            getRequest(`/mechanic/${id}`).then((response) => {
                setProfile(response.data);
                // @ts-ignore
                getCurrentLocation().then((location) => setCurrentLocation(location));
            });
        }
    }, [id]);

    return profile ? (
        <Box>
            <Typography variant="h5">Name: {profile.user.name}</Typography>
            <Typography>ID: {profile.id}</Typography>

            <Typography>
                Distance from me:{" "}
                {currentLocation &&
                    calculateDistance(
                        {
                            latitude: Number(profile.user.latitude),
                            longitude: Number(profile.user.longitude),
                        },
                        {
                            latitude: Number(currentLocation.latitude),
                            longitude: Number(currentLocation.longitude),
                        },
                    )}{" "}
                KM
            </Typography>
            <RatingDisplay m={profile.rating}/>
            <Button onClick={handleOpenModal} variant="contained" color="primary">
                Add Rating
            </Button>
            <AddRatingModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveRating}
            />

            <Typography variant={"subtitle1"}>{profile.about}</Typography>
            <Box
                sx={{
                    bgcolor: "#e2e2e2",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1em",
                    padding: "2em 1em",
                }}
            >
                <ServicesCard items={profile.services}/>
            </Box>
        </Box>
    ) : (
        <Typography>Loading...</Typography>
    );
};

export default MechanicProfile;
