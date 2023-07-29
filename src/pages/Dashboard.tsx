import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Call, More } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box sx={{background:"#7c7dfa"}}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <IconButton>
          <Call />
        </IconButton>
        <Box sx={{
            background:"#e2bd3b",
            borderRadius:"50%",
            width:"20em",
            padding:"1em 0"
        }}>


          <Typography textAlign={"center"}>Refer a friend</Typography>
        </Box>

        <IconButton>
          <More />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Dashboard;
