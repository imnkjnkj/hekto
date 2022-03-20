import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsAPI } from "./productsAPI";


export const getProductsThunk = createAsyncThunk("homepage/products", async () => {
  const response =getProductsAPI();
  console.log(response);
  return response;
});