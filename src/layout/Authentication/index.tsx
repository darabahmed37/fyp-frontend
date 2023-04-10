import {ReactNode} from "react";
import {styled} from "@mui/material/styles";
import bg from "assets/imgs/bg.jpeg";
const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ffdab9, #e6e6fa);
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
    },
});

const Image = styled("div")({
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "20px 0 0 20px",
});

type IAuthenticationHomeProps = {
    children?: ReactNode | null;
};

function AuthenticationHome({children}: IAuthenticationHomeProps) {

    return (
        <Container>
            <LoginPage>
                <ImageWrapper>
                    <Image/>
                </ImageWrapper>
                {children}
            </LoginPage>
        </Container>
    );
}

export default AuthenticationHome;
