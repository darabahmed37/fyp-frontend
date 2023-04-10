import {FC} from "react";
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import {RoutesLink} from "./routes";

interface RouteList {
    path: string;
    element?: JSX.Element;
    children?: RouteList[];
}

const routes: RouteList[] = [
    {
        path: "/auth",
        children: [
            {
                path: RoutesLink.LOGIN,
                element: <SignIn/>,
            },
            {
                path: RoutesLink.REGISTER,
                element: <SignUp/>,
            },
        ],
    },
];

function createRoutes(routes: RouteList[]) {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route path={route.path} element={route.element} key={index}>
                    {createRoutes(route.children)}
                </Route>
            );
        }
        return <Route path={route.path} element={route.element} key={index}/>;
    });
}

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {createRoutes(routes)}
                    <Route
                        path="*"
                        element={<Typography variant={"h1"}>404</Typography>}
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
