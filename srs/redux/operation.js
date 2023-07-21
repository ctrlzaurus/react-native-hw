import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    addUserBalanceApi,
    logOutApi,
    loginApi,
    registerApi,
} from "services/connectoinsApi";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (newUser, thunkApi) => {
        const { name, email, password } = newUser;
        try {
            await registerApi({ name, email, password });
            const userToken = await loginApi({ email, password });
            token.set(userToken);
            return { newUser, ...userToken };
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (newUser, thunkApi) => {
        const { email, password } = newUser;
        try {
            const userToken = await loginApi({ email, password });
            token.set(userToken);
            return userToken;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logOutUser = createAsyncThunk(
    "auth/logOut",
    async (_, thunkApi) => {
        try {
            const user = await logOutApi();
            token.unset();
            return user;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addUserBalance = createAsyncThunk(
    "auth/addBalance",
    async (balance, thunkApi) => {
        try {
            const newBalance = await addUserBalanceApi(balance);
            return newBalance;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);