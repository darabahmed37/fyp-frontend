import {FC, ReactNode} from "react";
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Dashboard, SignIn, SignUp} from "pages";
import {RoutesLink} from "routes";
import Authentication from "./layout/Authentication";
import {PrivateRoutes, PublicRoutes} from "components/protected";

export interface IRoute {
    path: string;
    element: ReactNode;
    child?: IRoute[];
    index?: boolean;
    protected?: boolean;
}

const routes: IRoute[] = [
    {
        path: "/auth",
        element: <Authentication/>,
        child: [
            {
                path: RoutesLink.LOGIN,
                element: <SignIn/>,

            },
            {
                path: RoutesLink.REGISTER,
                element: <SignUp/>,
            },
            {
                element: <SignIn/>,
                index: true,
                path: "",
            }
        ],
    }, {
        path: '/',
        element: <Dashboard/>,
        protected: true

    }
];


export function createRoutes(Routes: IRoute[]) {
    let outputRoutes: ReactNode[] = Routes.map((route, index) => {
        if (route.child === undefined) {
            return route.protected ? (
                <Route element={<PrivateRoutes/>} key={index}>
                    <Route {...route} key={index}/>
                </Route>
            ) : (
                <Route {...route} key={index}/>
            );
        }
        return route.protected ? (
            <Route element={<PrivateRoutes/>} key={index}>
                <Route path={route.path} key={index} element={route.element}>
                    {createRoutes(route.child)}
                </Route>
            </Route>
        ) : (
            <Route element={<PublicRoutes/>} key={index}>
                <Route path={route.path} key={index} element={route.element}>
                    {createRoutes(route.child)}
                </Route>
            </Route>
        );
    });
    outputRoutes.push(<Route key={3000} path="*" element={<Navigate to={"/"}/>}/>);
    return outputRoutes;
}


const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {createRoutes(routes)}

                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
