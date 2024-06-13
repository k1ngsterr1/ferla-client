import { IData, useAddCart } from "@shared/lib/hooks/useAddCart";

const handleSubmit = async (event: any, data: IData, accessToken: string) => {
  event.preventDefault();

  try {
    await useAddCart(data, accessToken);
  } catch (error) {
    console.error("Error adding cart:", error);
  }
};

export default handleSubmit;
