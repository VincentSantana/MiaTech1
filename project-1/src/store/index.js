import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./slices/textSlice"; 
import todosReducer from "./slices/todosSlice";

export const store = configureStore({ 
  reducer: {
    data: textReducer, 
    todos: todosReducer,
  },
});