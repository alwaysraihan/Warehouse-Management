import axios from "axios";
import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getAccessToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://perfume-inventory-server.herokuapp.com/login",
          {
            email,
          }
        );

        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getAccessToken();
  }, [user]);
  return [token];
};
export default useToken;
