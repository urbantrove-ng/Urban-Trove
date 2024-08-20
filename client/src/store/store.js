import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import cartItemSlice from "./cart-item";
const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartItem: cartItemSlice.reducer },
});
export default store;
