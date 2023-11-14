import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: true },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItemNum: 0, cartItems: [], toggleCart: false },
  reducers: {
    addToCart(state, { payload }) {
      state.cartItemNum = state.cartItemNum + 1;
      state.cartItems = [...state.cartItems, payload];
    },
    removeFromCart(state, { payload:id }) {
      state.cartItemNum = state.cartItemNum - 1;
      state.cartItems = state.cartItems.filter((_, i) => i !== id)
    },

    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
