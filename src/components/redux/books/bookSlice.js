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
