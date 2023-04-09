import * as React from "react";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #FFDAB9, #E6E6FA);
`;
const LoginPage = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    height: "80vh",
    width: "70vw",
    "@media (max-width: 768px)": {
        width: "100vw",
    },
    margin: "0 auto",
    overflow: "hidden",

});

const ImageWrapper = styled("div")({
    flex: "1 1 0",
    "@media (max-width: 768px)": {
        display: "none",
    }


});


const Image = styled("div")({
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "20px 0 0 20px",
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
    }
});

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission logic here
    };


    return (
        <Container>
            <LoginPage>
                <ImageWrapper>
                    <Image/>
                </ImageWrapper>
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
            </LoginPage>
        </Container>
    );
};

export default Login;
