import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Call, More } from "@mui/icons-material";
import { useAppStore } from "../store";
import ServicesCard from "../components/ServicesCard";

const Dashboard = () => {
  const items = useAppStore.use.services();

  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <Box>
      <Box
        sx={{
          background: "#7578ef",
          borderRadius: "10px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <IconButton>
            <Call />
            <Typography>{user.phoneNumber}</Typography>
          </IconButton>
          <Box
            sx={{
              background: "#eee1b4",
              width: "18em",
              borderRadius: "10px",
              padding: ".5em 0em",
            }}
          >
            <Typography textAlign={"center"}>Refer a friend</Typography>
          </Box>

          <IconButton>
            <More />
          </IconButton>
        </Stack>
      </Box>

      <Box
        sx={{
          bgcolor: "#e2e2e2",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          paddingTop: "2em",
        }}
      >
        <ServicesCard items={items} />
      </Box>
    </Box>
  );
};

export default Dashboard;
