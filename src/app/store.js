import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsSliceReducer from '../features/user/stores/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsSliceReducer,
  },
});
