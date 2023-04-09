import {FC} from "react";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import SignUp from "./pages/sign-up";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignUp/>
        </ThemeProvider>
    );
};

export default App;
