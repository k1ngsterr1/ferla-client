import axios from "axios";
import { useState } from "react";

export function useChangePhoto() {
  const [error, setError] = useState(null);

  const postImage = async (data: File, tagID: string) => {
    try {
      const formData = new FormData();

      formData.append("editable-image", data);
      formData.append("componentId", tagID);

      const response = await axios.post(
        "https://spark-admin-production.up.railway.app/api/site/upload/image/agro",
        formData
      );

      console.log(response.data);
    } catch (error: unknown | any) {
      setError(error.response?.data.message || error.message);
    }
  };

  return { error, postImage };
}
