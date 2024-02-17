import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findProduct = state.cart.find(
        (product) => product.id === action.payload.id,
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.cart.push(action.payload);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
    },
    increaseCartQuantity(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      item.quantity++;
      item.total_price = item.retail_price_cents * item.quantity;
    },
    decreaseCartQuanity(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      item.quantity--;
      item.total_price = item.retail_price_cents * item.quantity;
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
