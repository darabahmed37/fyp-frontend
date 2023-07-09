import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { RoutesLink } from "routes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "api/sign-in";
import { setAccessToken, setRefreshToken } from "utils/user";
import { getRequest } from "utils/axios";

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

const schema = yup.object().shape({
  "User Name": yup.string().required().min(5),
  Password: yup.string().required().min(8),
});

function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    signIn(data["User Name"], data["Password"]).then((response) => {
      setAccessToken(response["access_token"]);
      setRefreshToken(response["refresh_token"]);
      getRequest("/user/profile").then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      });
    });
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          autoComplete="username"
          {...register("User Name")}
          error={!!errors["User Name"]}
          helperText={errors["User Name"]?.message}
          autoFocus
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
          Sign in
        </Button>
        <Link href={RoutesLink.REGISTER} variant="body2">
          Don't have an account? Sign Up
        </Link>
      </Form>
    </FormContainer>
  );
}

export default SignIn;
