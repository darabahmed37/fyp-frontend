import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Call, More } from "@mui/icons-material";
import { getRequest } from "utils/axios";

export interface DashboardOptions {
  image: string;
  description: string;
  title: string;
  to?: string;
}

const Dashboard = () => {
  const [items, setItems] = useState<DashboardOptions[]>([]);

  useEffect(() => {
    getRequest("/services").then((response) => {
      setItems(response.data);
    });
  }, []);

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

      <Box
        sx={{
          bgcolor: "#e2e2e2",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          paddingTop: "2em",
        }}
      >
        {items.map((it, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "300px",
              padding: "2em 1.4em",
              margin: "auto",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          >
            <CardMedia
              component={"img"}
              image={`${process.env.REACT_APP_BASE_BACKEND_URL}/services/${it.image}`}
              sx={{
                objectFit: "contain",
                maxHeight: "150px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {it.title}
              </Typography>
              <Typography variant={"subtitle2"} color="text.secondary">
                {it.description.length > 250
                  ? it.description.substring(0, 250) + "..."
                  : it.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
