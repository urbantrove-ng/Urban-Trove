import { useUrban } from "../../context/UrbanContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const { auth } = useUrban();
  const location = useLocation();

  return auth?.accessToken || auth?.role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default ProtectedRoutes;
