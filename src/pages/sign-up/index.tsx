import * as React from "react";
import { styled } from "@mui/material/styles";
import AuthenticationHome from "../../layout/Authentication";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission logic here
  };
  return (
    <AuthenticationHome>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            name="lastName"
            autoComplete="family-name"
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            autoComplete="tel"
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dob"
            name="dob"
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
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Link href="#" variant="body2">
            Already signed up? Log in here
          </Link>
        </Form>
      </FormContainer>
    </AuthenticationHome>
  );
}

export default SignUp;
