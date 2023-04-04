import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
