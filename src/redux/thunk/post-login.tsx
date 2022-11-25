import { createAsyncThunk } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { token, user } from "redux/reducer";
import axios from "axios";
import API from "redux/api";

export const login = createAsyncThunk(
    "User login",
    async (val: any, { dispatch }) => {
        const body = {
            login: val.name,
            password: val.password,
        };

        const res = await axios.post(`${API}/token/authenticate`, body);

        batch(() => {
            dispatch(token(res.data.jwtToken));
            dispatch(user(res.data.user));
        });
    }
);
