import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [],
  totalAmount: 0,
};
const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalAmount++;
      if (!exisitingCartItem) {
        state.items.push({
          product: {
            id: newItem.product.id,
            price: newItem.product.price,
            imageUrl: newItem.product.imageUrl,
            productName: newItem.product.productName,
          },
          quantity: newItem.quantity,
          total: newItem.total,
          shipping: newItem.shipping,
        });
      } else {
        exisitingCartItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitingCartItem = state.items.find((item) => item.id === id);
      state.totalAmount--;
      if (exisitingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingCartItem.quantity--;
        exisitingCartItem.totalPrice =
          exisitingCartItem.totalPrice - exisitingCartItem.price;
      }
    },
    reserCart() {
      return initialCartState;
    },
    pushCartToItems(state, action) {
      const cartItems = action.payload;
      cartItems.forEach((item) => {
        const existingCartItem = state.items.find(
          (cartItem) => cartItem.id === item.id
        );
        if (!existingCartItem) {
          state.items.push({
            product: {
              id: item.product.id,
              price: item.product.price,
              imageUrl: item.product.imageUrl,
              productName: item.product.productName,
            },
            quantity: item.quantity,
            total: item.total,
            shipping: item.shipping,
          });
        } else {
          existingCartItem.quantity += item.quantity;
          existingCartItem.totalPrice += item.totalPrice;
        }
      });
    },
  },
});
export default cartItemSlice;
export const cartItemAction = cartItemSlice.actions;
