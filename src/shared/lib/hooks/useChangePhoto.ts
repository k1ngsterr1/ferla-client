import axios from "axios";
import { useState } from "react";
import { useUserData } from "./useUserData";

interface IUploadPhotoData {
  editable_image: File;
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
      formData.append("userId", "1");
      formData.append("websiteId", data.websiteId.toString());
      formData.append("url", data.url.toString());
      formData.append("componentId", data.componentId.toString());

      console.log("formData:", formData);

      const response = await axios.post(
        "http://localhost:4000/api/site/upload/image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userData!.accessToken}`,
          },
        }
      );

      console.log(response.data);
    } catch (error: unknown | any) {
      setError(error.response?.data.message || error.message);
      console.log(error, data);
    }
  };

  return { error, postImage };
}
