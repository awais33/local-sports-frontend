import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../actions/auth";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        [register.pending]: (state) => {
            state.loading = true;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
    },
});

export default authSlice.reducer;
