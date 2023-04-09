import {FC} from "react";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Authentication from "./pages/Authentication";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Authentication/>
        </ThemeProvider>
    );
};

export default App;