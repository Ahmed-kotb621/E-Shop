import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

const wishSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWish(state, action) {
      state.wishList.push(action.payload);
    },
    clearWishList(state) {
      state.wishList = [];
    },
    deleteFromWishList(state, action) {
      state.wishList = state.wishList.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addToWish, clearWishList, deleteFromWishList } =
  wishSlice.actions;
export default wishSlice.reducer;
