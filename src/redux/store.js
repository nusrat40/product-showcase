import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'; // match filename

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
