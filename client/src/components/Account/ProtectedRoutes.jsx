import { useContext } from "react";
import { UrbanContext } from "../../context/UrbanContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const { auth } = useContext(UrbanContext);
  const location = useLocation();

  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default ProtectedRoutes;
