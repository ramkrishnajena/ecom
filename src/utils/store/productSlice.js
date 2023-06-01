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
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    countProductQuantity: (state, action) => {
      const products = {};
      let q = 1;
      for (let items of state.cart) {
        products[items.id] = products[items.id]
          ? state.cart.push({ ...items, quantity: q++ })
          : state.cart.push({ ...items, quantity: 1 });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
