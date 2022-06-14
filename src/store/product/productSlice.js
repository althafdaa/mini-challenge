import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    SET_DATA(state, action) {},
  },
});

export const { SET_DATA } = productSlice.actions;

export default productSlice.reducer;
