import { useUrban } from "../../context/UrbanContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
function useLogOut() {
  const axiosPrivate = useAxiosPrivate();

  const { setAuth } = useUrban();

  const LOGOUT_URL = "/auth/logout";

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
