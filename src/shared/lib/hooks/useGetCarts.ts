import axios from "axios";
import { useState, useEffect } from "react";

interface IResponseData {
  name: string;
  description: string;
  img_url: string;
  price: number;
}

export function useGetCarts() {
  const [data, setData] = useState<IResponseData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IResponseData>(
          "https://ferla-backend-production.up.railway.app/api/carts/get-carts"
        );
        setData(response.data.carts);
        setIsLoading(false);
      } catch (error: unknown | any) {
        setError(
          "Failed to fetch data: " +
            (error.response?.data.message || error.message)
        );
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
