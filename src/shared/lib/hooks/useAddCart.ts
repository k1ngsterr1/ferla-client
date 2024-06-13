import axios from "axios";

export interface IData {
  code: string;
  url?: string;
  image: File | null;
  name: string;
  price: string;
  description: string;
}

export async function useAddCart(
  data: IData,
  accessToken: string
): Promise<void> {
  try {
    const formData = new FormData();

    // Append each part of data to the FormData object
    formData.append("code", data.code);
    formData.append(
      "url",
      "https://ferla-backend-production.up.railway.app/api/carts/add"
    );
    if (data.image) formData.append("image", data.image, data.image.name);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);

    const response = await axios.post(
      "https://spark-admin-production.up.railway.app/api/website/ferla-bikes/89d6700c-288d-46c6-b463-60aae8b1b830/add-cart",
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);
  } catch (error: unknown | any) {
    console.error("Failed to create data:", error);
    if (error.response) {
      return error.response;
    } else {
      console.error("There was an error with adding cart:", error);
    }
  }
}
