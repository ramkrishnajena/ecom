import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callProducts } from "./productSlice";

export const callProductsCategories = createAsyncThunk(
  "/products/categories",
  async (name, { rejectWithValue }) => {
    try {
      const data = await fetch("https://dummyjson.com/products/categories");
      const resp = await data.json();
      return resp;
    } catch (error) {
      returnrejectWithValue(resp);
    }
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callProductsCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
