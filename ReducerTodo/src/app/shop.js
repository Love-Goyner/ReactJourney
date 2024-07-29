import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoRedux";

export const store = configureStore({
    reducer : todoReducer
})