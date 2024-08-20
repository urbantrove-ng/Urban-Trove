import axios from "../Api/axios";
import { useUrban } from "../context/UrbanContext";
const useRefreshToken = () => {
  const { setAuth } = useUrban();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      withCredentials: true,
    });

    if (response.data.code === 200 && response?.data?.data.role == "user") {
      setAuth({
        ...response.data.data,
        accessToken: response.data.data.accessToken,
      });
    }

    return response.data.accessToken;
  };

  return refresh;
};
export default useRefreshToken;
