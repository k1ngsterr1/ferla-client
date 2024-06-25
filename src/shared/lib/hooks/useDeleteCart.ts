import axiosInstance from "./useInterceptor";

export async function deleteResource(
  cartId: number,
  accessToken?: string
): Promise<void> {
  try {
    const formData = new FormData();
    const url = `https://ferla-backend-production.up.railway.app/api/carts/delete`;
    const encodedUrl = encodeURIComponent(url);

    formData.append("id", cartId),
      formData.append(
        "url",
        `https://ferla-backend-production.up.railway.app/api/carts/delete/${cartId}`
      );

    const response = await axiosInstance.delete(
      `https://spark-admin-production.up.railway.app/api/website/ferla-bikes/89d6700c-288d-46c6-b463-60aae8b1b830/delete-cart/${cartId}/${encodedUrl}`
    );

    console.log("Resource deleted successfully:", response.data);
  } catch (error: unknown | any) {
    console.error("Failed to delete resource:", error);
    return error.response
      ? error.response.data.message
      : "An unexpected error occurred";
  }
}
