import { Navigate, Outlet } from "react-router-dom";
import { RoutesLink } from "routes";

export const PrivateRoutes = () => {
    let auth = localStorage.getItem("accessToken");
    return auth ? <Outlet /> : <Navigate to={RoutesLink.LOGIN} />;
};

export function PublicRoutes() {
    let auth = localStorage.getItem("accessToken");

    const outlet = <Outlet />;
    const navigate = <Navigate to={RoutesLink.HOME} />;
    return auth ? navigate : outlet;
}
