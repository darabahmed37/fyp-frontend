import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useAppStore } from "../../store";
import { IServices } from "../../utils/types";
import Button from "@mui/material/Button";

import "./style.css";
import { getRequest, postRequest } from "../../utils/axios";
import TextArea from "../../components/text-area";
import {ChangePasswordForm} from "./Customer"; // Import the CSS file

const Mechanic = () => {
  const services = useAppStore.use.services();
  const [selectedServices, setSelectedServices] = useState<IServices[]>([]);

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedService = event.target.value;

    setSelectedServices((prevSelectedServices) => {
      if (
        prevSelectedServices.some(
          (service) => service.title === selectedService,
        )
      ) {
        return prevSelectedServices.filter(
          (service) => service.title !== selectedService,
        );
      } else {
        const serviceToAdd = services.find(
          (service) => service.title === selectedService,
        );
        if (serviceToAdd) {
          return [...prevSelectedServices, serviceToAdd];
        }
      }
      return prevSelectedServices;
    });
  };
  useEffect(() => {
    getRequest("/mechanic/services").then((response) => {
      setSelectedServices(response.data);
    });
  }, []);

  function saveServices() {
    postRequest("/mechanic/save-services", selectedServices).then(() => {
      alert("services updated");
    });
  }

  return (
    <Box className="form-container">
      <Typography variant="h3" className={"form-title"}>
        Add More Services
      </Typography>
      <FormControl>
        <FormGroup>
          {services.map((service, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  className="form-checkbox"
                  checked={selectedServices.some(
                    (s) => s.title === service.title,
                  )}
                  onChange={handleServiceChange}
                  value={service.title}
                />
              }
              label={service.title}
            />
          ))}
        </FormGroup>
        <Button
          className="save-button"
          variant="contained"
          onClick={saveServices}
          color={"success"}
        >
          Save
        </Button>
      </FormControl>

      <TextArea />
        <ChangePasswordForm/>
    </Box>

  );
};

export default Mechanic;
