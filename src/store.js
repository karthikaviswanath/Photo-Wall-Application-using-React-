// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings

import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photoSlice";

export default configureStore({
  reducer: { photoReducer },
});
