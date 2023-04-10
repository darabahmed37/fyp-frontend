import * as React from "react";
import {ReactNode} from "react";
import {styled} from "@mui/material/styles";
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

function Signin(): ReactNode {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission logic here
    };
    return (
        <AuthenticationHome>
            548
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
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
                    <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}}>
                        Sign in
                    </Button>
                    <Link href="#" variant="body2">
                        Already signed up? Log in here
                    </Link>
                </Form>
            </FormContainer>
        </AuthenticationHome>
    );
}

export default Signin;
