// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings

import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photoSlice";
import commentReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `photo`, handled by `photoReducer` and `comment`, handled by `commentReducer`
    photo: photoReducer,
    comment: commentReducer,
  },
});

export default store;
