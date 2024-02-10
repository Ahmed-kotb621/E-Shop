import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart([]);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    increaseCartQuantity(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      item.quantity++;
      item.retail_price_cents = item.retail_price_cents * item.quantity;
    },
    decreaseCartQuanity(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      item.quantity--;
      item.retail_price_cents = item.retail_price_cents * item.quantity;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseCartQuantity,
  decreaseCartQuanity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
