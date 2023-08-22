import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IServices } from "../utils/types";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ items }: { items: IServices[] }) => {
  const navigate = useNavigate();
  return (
    <>
      {items.map((it, index) => (
        <Card
          onClick={() => {
            navigate(`/service/${it.id}`);
          }}
          key={index}
          sx={{
            maxWidth: "300px",
            padding: "2em 1.4em",
            margin: "auto",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            userSelect: "none",
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
    </>
  );
};

export default ServicesCard;
