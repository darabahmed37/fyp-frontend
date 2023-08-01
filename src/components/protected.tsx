import { Navigate, Outlet } from "react-router-dom";
import { RoutesLink } from "routes";

export const PrivateRoutes = () => {
  let auth = localStorage.getItem("access");
  return auth ? <Outlet /> : <Navigate to={RoutesLink.LOGIN} />;
};

export function PublicRoutes() {
  let auth = localStorage.getItem("access");

  const outlet = <Outlet />;
  const navigate = <Navigate to={RoutesLink.HOME} />;
  return auth ? navigate : outlet;
}
