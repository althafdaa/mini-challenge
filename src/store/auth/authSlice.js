import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  data: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_TOKEN(state, action) {
      state.token = action.payload;
    },
    SET_USER(state, action) {
      state.data = action.payload;
    },
  },
});

export const { SET_TOKEN, SET_USER } = authSlice.actions;

export default authSlice.reducer;
