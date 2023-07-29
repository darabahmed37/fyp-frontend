import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Call, More } from "@mui/icons-material";

const Dashboard = () => {
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

        <Box sx={{
            bgcolor:"#e2e2e2"
        }}>

        </Box>
    </Box>
  );
};

export default Dashboard;
