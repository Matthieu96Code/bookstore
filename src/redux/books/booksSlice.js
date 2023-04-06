import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ChlLvvO52kCUz8lnKZM5/books';

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    // return err.message;
    return thunkAPI.rejectWithValue('Thunk Error');
  }
});

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const book = action.payload;
        const bookList = [];
        Object.keys(book).forEach((key) => {
          const newState = {};
          newState[key] = book[key];
          bookList.push(newState);
        });
        return ({
          ...state,
          isLoading: false,
          books: bookList,
        });
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
