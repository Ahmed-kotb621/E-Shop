import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  order: [],
};
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.order.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
