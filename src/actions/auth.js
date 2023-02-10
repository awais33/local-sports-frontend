import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../services/axios";

export const login = createAsyncThunk("auth/login", async (credentials) => {
    const response = await apiRequest.post("/login", credentials);
    return response.data;
});

export const register = createAsyncThunk("auth/register", async (credentials) => {
    const response = await apiRequest.post("/register", credentials);
    return response.data;
});

export const logout = () => ({ type: "auth/logout" });
