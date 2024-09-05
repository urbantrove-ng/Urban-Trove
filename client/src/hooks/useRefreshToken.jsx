import { useContext } from "react";
import axios from "../Api/axios";
import { UrbanContext } from "../context/UrbanContext";
const useRefreshToken = () => {
  const { setAuth } = useContext(UrbanContext);

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      withCredentials: true,
    });

    if (response.data.code === 200 ) {
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
