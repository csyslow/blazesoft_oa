import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookSlice";

//create store
const store = configureStore({
    reducer: {
        book: bookReducer
    }
});

export default store;