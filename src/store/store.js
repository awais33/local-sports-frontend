import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiRequest from "../services/axios";
import auth from "../reducers/authSlice";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        auth,
    },
    middleware: [...getDefaultMiddleware(), thunk.withExtraArgument({ apiRequest })],
});

export default store;
