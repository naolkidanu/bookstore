import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const appId = "JyK4gWmXitzJmJBDoo80";
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const initialState = {
  books: [
    {
      id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
    {
      id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
    },
    {
      id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
    },
  ],
};

export const fetchBooksAsync = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const response = await axios.get(API_URL);
    const booksArray = Object.keys(response.data).map((itemKey) => ({
      item_id: itemKey,
      ...response.data[itemKey][0],
    }));
    return booksArray;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
