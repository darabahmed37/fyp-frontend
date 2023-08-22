import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/axios";
import ServicesCard from "../components/ServicesCard";
import { Box, Typography } from "@mui/material";
import { Mechanic } from "../utils/types";
import {
  calculateDistance,
  getCurrentLocation,
  Location,
} from "../utils/location";

const MechanicProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<Mechanic>();
  const [currentLocation, setCurrentLocation] = useState<Location>();

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
      <Typography variant="h4">Name: {profile.user.name}</Typography>
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
            }
          )}{" "}
        KM
      </Typography>
      <Box
        sx={{
          bgcolor: "#e2e2e2",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          padding: "2em 1em",
        }}
      >
        <ServicesCard items={profile.services} />
      </Box>
    </Box>
  ) : (
    <Typography>Loading...</Typography>
  );
};

export default MechanicProfile;
