import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categoriesSlice from "./categoriesSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    category: categoriesSlice,
    user: UserSlice,
  },
});

export default store;
