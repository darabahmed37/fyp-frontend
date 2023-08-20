import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { getRequest } from "../utils/axios";
import RatingDisplay from "../components/rating";

const Service = () => {
  const styles = {
    card: {
      width: "300px",
      border: "2px solid #e0e0e0",
      borderRadius: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
    header: {
      backgroundColor: "#3f51b5",
      color: "white",
      padding: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    content: {
      padding: "16px",
    },
  };

  const params = useParams();
  const [mechanics, setMechanics] = useState<
    {
      user: any;
      rating: any[];
    }[]
  >([]);
  const [rating, setRating] = useState<number>(0);
  useEffect(() => {
    getRequest(`/services/mechanic/${params.id}`).then((response) => {
      setMechanics(response.data);
    });
  }, [params]);

  return (
    <Box>
      <Box>
        <Typography variant={"h5"}>The available mechanics are</Typography>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {mechanics.map((m, index) => (
            <Card key={index} variant="outlined" sx={styles.card}>
              <div style={styles.header}>
                <Typography variant="h6">{m.user.name}</Typography>
              </div>
              <CardContent sx={styles.content}>
                <Typography>Phone Number: {m.user.phoneNumber}</Typography>
                <RatingDisplay m={m.rating} />
              </CardContent>
            </Card>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Service;
