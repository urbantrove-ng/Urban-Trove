import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  showCart: false,
  showOrder: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    showOrder(state) {
      state.showOrder = !state.showOrder;
    },
  },
});
export default cartSlice;
export const cartAction = cartSlice.actions;
