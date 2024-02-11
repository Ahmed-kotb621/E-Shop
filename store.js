import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './src/features/cart/cartSlice';
import wishSlice from './src/features/wishList/wishSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishSlice,
  },
});
