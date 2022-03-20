import productsApi from "../../../api/productsAPI";

export const getProductsAPI = async () => {
  try {
    const response = await productsApi.getAllProducts();
    return response;

  } catch (error) {
    return error.response.data;
  }
};
