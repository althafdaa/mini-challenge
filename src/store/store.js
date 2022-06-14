import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import productSlice from './product/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
