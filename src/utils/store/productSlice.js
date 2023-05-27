import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const callProducts = createAsyncThunk(
  "/products",
  async (name, { rejectWithValue }) => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const resp = await data.json();
      return resp.products;
    } catch (error) {
      returnrejectWithValue(resp);
    }
  }
);

const productSlice = createSlice({
  name: "Products",
  initialState: {
    products: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
// callProducts("/products");

export default productSlice.reducer;
