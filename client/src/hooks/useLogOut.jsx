import { useAuth } from "@/context/AuthContext";
import useAxiosPrivate from "./useAxiosPrivate";
function useLogOut() {
  const axiosPrivate = useAxiosPrivate();

  const { setAuth } = useAuth();

  const LOGOUT_URL = "/Logout";

  const LogOut = async () => {
    const response = await axiosPrivate.post(LOGOUT_URL, {
      withCredentials: true,
    });

    setAuth({});

    return response;
  };
  return LogOut;
}

export default useLogOut;
