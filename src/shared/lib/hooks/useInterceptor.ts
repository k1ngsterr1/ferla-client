// axiosConfig.ts
import axios from "axios";
import { isTokenExpired } from "./helper";
import { useNavigate } from "react-router-dom";

// Create an instance of Axios
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const accessToken = userData.accessToken;

    if (isTokenExpired(accessToken)) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userData");
      window.location.href = "/login"; // Redirect to login
      return Promise.reject(new Error("Token expired"));
    }

    // Add Authorization header to the request if token exists and is not expired
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userData");
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
