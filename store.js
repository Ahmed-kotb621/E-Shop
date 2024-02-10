import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './src/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
