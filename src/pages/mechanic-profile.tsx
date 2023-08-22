import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/axios";
import ServicesCard from "../components/ServicesCard";
import { Box } from "@mui/material";
import { Mechanic } from "../utils/types";

const MechanicProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<Mechanic>();
  useEffect(() => {
    if (id) {
      getRequest(`/mechanic/${id}`).then((response) => {
        setProfile(response.data);
      });
    }
  }, [id]);
  return (
    <Box
      sx={{
        bgcolor: "#e2e2e2",
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
        padding: "2em 1em",
      }}
    >
      {profile && <ServicesCard items={profile.services} />}
    </Box>
  );
};

export default MechanicProfile;
