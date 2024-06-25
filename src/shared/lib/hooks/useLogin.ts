// login.ts
import axios from "axios";

export async function useLogin(data: any): Promise<string | void> {
  try {
    const response = await axios.post(
      "https://spark-admin-production.up.railway.app/api/auth/login",
      data
    );

    const isVerified = response.data.user.isVerified;

    if (isVerified) {
      // Set isAuthenticated to true in localStorage
      localStorage.setItem("isAuthenticated", "true");

      // Setting user data in localStorage
      const userData = {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email,
        refreshToken: response.data.refreshToken,
        accessToken: response.data.accessToken,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "/ferla";
    } else {
      // Redirect to forbidden page if not verified
      window.location.href = "/ferla/forbidden";
      return; // Stop further execution
    }
  } catch (error: unknown | any) {
    console.error("Failed to create data:", error);
    if (error.response) {
      return error.response.data.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
