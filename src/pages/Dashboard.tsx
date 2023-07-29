import React from "react";
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
import airConditiong from "assets/icons/air-conditioning_1060321.png";
import towingService from "assets/icons/breakdown_3005593.png";
import inspection from "assets/icons/diagnostic_1786559.png";
import generator from "assets/icons/electric-generator_6232580.png";
import key from "assets/icons/key_807241.png";
import maintinace from "assets/icons/maintenance_1743614.png";

export interface DashboardOptions {
  image: string;
  description: string;
  title: string;
  to?: string;
}

const items: DashboardOptions[] = [
  {
    image: airConditiong,
    title: "Fix Air Conditioning",
    description:
      "Welcome to our Car Air Conditioning Repair Application Dashboard! With user-friendly navigation and real-time updates, our dashboard provides a comprehensive overview of your vehicle's cooling system. Access diagnostics, service history, and find nearby certified technicians. Monitor refrigerant levels, track maintenance schedules, and receive timely alerts for optimal performance. Enjoy hassle-free driving with our intuitive dashboard!",
  },
  {
    image: towingService,
    title: "Car towing Service",
    description:
      "Introducing our car repair app's reliable car towing service! We understand the frustration of unexpected breakdowns, and that's why we offer swift, 24/7 assistance. Our skilled team ensures your vehicle is safely towed to the nearest trusted repair center. Count on us for prompt, hassle-free towing when you need it most!",
  },
  {
    image: inspection,
    title: "Inspection of Car",
    description:
      "Our car inspection before sale app offers a reliable and efficient car towing service to ensure your vehicle's smooth evaluation. With a network of trusted towing partners, we ensure safe transportation of your car to the inspection center. Rest easy, knowing your potential buyers will receive a thorough assessment of your car's condition.",
  },
  {
    image: generator,
    title: "Generator Service",
    description:
      "Introducing our reliable car towing service, an essential feature of our innovative car generator service app. When faced with unexpected breakdowns or battery failures, we've got you covered. Our team of skilled professionals is just a tap away, ensuring prompt and efficient towing to the nearest garage, giving you peace of mind on the road. Trust us to get you back on track swiftly. Download the app now and experience hassle-free assistance whenever you need it. Safety and convenience guaranteed.",
  },
  {
    image: key,
    title: "Duplicate Key",
    description:
      "Our car duplicate key service app offers a seamless solution for those unfortunate moments when you find yourself locked out of your vehicle. In conjunction with our trusted partners, we provide a reliable car towing service that ensures your vehicle is safely transported to your preferred location. Count on us for swift assistance and peace of mind.",
  },
  {
    image: maintinace,
    description:
      "Our car maintenance key service app offers reliable and efficient car towing solutions to keep drivers stress-free on the road. With just a few taps, users can request prompt assistance from trusted towing professionals. Whether it's a breakdown or accident, our app ensures a seamless towing experience, providing peace of mind to our valued customers.",
    title: "Car Maintaince",
  },
];

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

      <Box
        sx={{
          bgcolor: "#e2e2e2",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          paddingTop: "2em",
        }}
      >
        {items.map((it) => (
          <Card
            sx={{
              maxWidth: "300px",
              padding: "2em 1.4em",
              margin: "auto",
            }}
          >
            <CardMedia
              component={"img"}
              image={it.image}
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
