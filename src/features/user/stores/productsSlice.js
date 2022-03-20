import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductsThunk } from "./asyncThunk";

const initialState = {
  products: [],
};

export const homePageSlice = createSlice({
  name: "homepage",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {})
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
        }
      })
      .addCase(getProductsThunk.rejected, (state) => {});
  },
});

export default homePageSlice.reducer;
