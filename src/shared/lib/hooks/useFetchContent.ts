import axios from "axios";
import { useState, useEffect } from "react";

export function useFetchContent() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ferla-backend-production.up.railway.app/api/components/get-components"
        );
        setContent(response.data.components);
        setIsLoading(false);
      } catch (error) {
        setError(
          "Failed to fetch data: " +
            (error.response?.data.message || error.message)
        );
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { content, isLoading, error };
}
