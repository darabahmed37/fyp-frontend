import {Navigate, Outlet} from "react-router-dom";
import {RoutesLink} from "routes";
import {useAppStore} from "../store";
import {useEffect} from "react";
import {getRequest} from "../utils/axios";

export const PrivateRoutes = () => {
    let auth = localStorage.getItem("access");
    const setItems = useAppStore.use.setServices();
    useEffect(() => {
        if (auth) {
            getRequest("/services").then((response) => {
                setItems(response.data);
            });
        }
    }, [setItems]);

    return auth ? <Outlet/> : <Navigate to={RoutesLink.LOGIN}/>;
};

export function PublicRoutes() {
    let auth = localStorage.getItem("access");

    const outlet = <Outlet/>;
    const navigate = <Navigate to={RoutesLink.HOME}/>;
    return auth ? navigate : outlet;
}
