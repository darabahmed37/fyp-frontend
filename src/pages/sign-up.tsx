import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { RoutesLink } from "routes";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { validUserName } from "api/sign-up";
import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { getRequest } from "utils/axios";
import { BASE_BACKEND_URL } from "config";
import axios from "axios";

const schema = yup.object().shape({
  Name: yup.string().required().min(5),
  "Phone Number": yup.string().required("Phone Number Can't Be Blank"),
  "Date of birth": yup.date().required("This Field is required"),
  Email: yup.string().email("Must be a valid Email"),
  Password: yup.string().min(8),
  "User Name": yup.string().min(5),
});

const FormContainer = styled("div")({
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  margin: "0 auto",
  position: "relative",

  "::before": {
    "@media (max-width: 768px)": {
      display: "none",
    },
    content: "''",
    borderRadius: "0 20px 20px 0",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
  },
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  minWidth: "60%",
  "@media (max-width: 768px)": {
    minWidth: "90%",
  },
  "& .MuiTypography-body2": {
    zIndex: 1,
  },
});

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: any) {
    let userName: string = data["User Name"];
    validUserName(userName).then((value) => {
      console.log(value);
    });
  }

  const [option, setOption] = useState<string[]>([]);

  async function fetchOptions() {
    let response = await getRequest(`${BASE_BACKEND_URL}/role`, axios);
    setOption(response.data);
  }

  useEffect(() => {
    fetchOptions().then((r) => {
      console.log("options Fetched");
    });
  }, []);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Name"
          autoComplete="given-name"
          autoFocus
          {...register("Name")}
          error={!!errors["Name"]}
          helperText={errors["Name"]?.message}
        />

        <TextField
          label={"Username"}
          variant={"outlined"}
          margin={"normal"}
          required
          fullWidth
          id={"username"}
          {...register("User Name")}
          error={!!errors["User Name"]}
          helperText={errors["User Name"]?.message}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          autoComplete="email"
          {...register("Email")}
          error={!!errors["Email"]}
          helperText={errors["Email"]?.message}
        />

        <Select required fullWidth>

          {option.map((data, index) => (
            <MenuItem key={index} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          required
          inputMode={"tel"}
          fullWidth
          id="phoneNumber"
          {...register("Phone Number")}
          error={!!errors["Phone Number"]}
          helperText={errors["Phone Number"]?.message}
          autoComplete="tel"
        />
        <TextField
          label="Date of Birth"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="dob"
          {...register("Date of birth")}
          error={!!errors["Date of birth"]}
          helperText={errors["Date of birth"]?.message}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          {...register("Password")}
          error={!!errors["Password"]}
          helperText={errors["Password"]?.message}
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Link href={RoutesLink.LOGIN} variant="body2">
          Already signed up? Log in here
        </Link>
      </Form>
    </FormContainer>
  );
}

export default SignUp;
