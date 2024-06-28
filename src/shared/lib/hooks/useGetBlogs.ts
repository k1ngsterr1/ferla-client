"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export function useGetBlogs() {
  const [blogData, setBlogData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ferla-backend-production.up.railway.app/api/blog/get-blogs"
        );
        setBlogData(response.data.cards);
      } catch (error: unknown | any) {
        console.error(`There was an error with blogs fetching: ${error}`);
      }
    };

    fetchData();
  }, []);

  return { blogData };
}
