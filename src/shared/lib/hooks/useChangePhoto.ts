import axios from "axios";
import { useState } from "react";
import { useUserData } from "./useUserData";
import axiosInstance from "./useInterceptor";

interface IUploadPhotoData {
  editable_image: any;
  userId: number | string;
  websiteId: number | string;
  url: string;
  componentId: number | string;
}

export function useChangePhoto() {
  const [error, setError] = useState(null);
  const { userData } = useUserData();

  const postImage = async (data: IUploadPhotoData) => {
    try {
      const formData = new FormData();

      formData.append("editable-image", data.editable_image);
      formData.append("id", data!.userId);
      formData.append("websiteId", data.websiteId.toString());
      formData.append("url", data.url.toString());
      formData.append("componentId", data.componentId.toString());

      const response = await axiosInstance.post(
        "https://spark-admin-production.up.railway.app/api/site/upload/image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userData!.accessToken}`,
          },
        }
      );
      console.log("zhopa");

      console.log(response);
    } catch (error: unknown | any) {
      setError(error.response?.data.message || error.message);
      console.log(error, data);
    }
  };

  return { error, postImage };
}
