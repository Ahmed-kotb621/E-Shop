import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './src/features/cart/cartSlice';
import wishSlice from './src/features/wishList/wishSlice';
import userSlice from './src/features/user/userSlice';
import orderSlice from './src/features/Order/orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishSlice,
    user: userSlice,
    order: orderSlice,
  },
});
