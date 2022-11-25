import { createAsyncThunk } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { mockData } from "redux/reducer";

export const testeEdit = createAsyncThunk(
    "testeEdit",
    async (val: any, { dispatch }) => {

        batch(() => {
            dispatch(mockData(val));
        });
    }
);
