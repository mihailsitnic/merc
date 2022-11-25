import { createSlice } from "@reduxjs/toolkit";
import initialState from "./init";

const rootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {
		lang: (state, action) => {
			state.lang = action.payload;
		},
		token: (state, action) => {
			state.token = action.payload;
		},
		user: (state, action) => {
			state.user = action.payload;
		},
		mockData: (state, action) => {
			state.mockData = action.payload;
		},
		reset: () => initialState,
	},
});

export const reducer = rootSlice.reducer;

export type RootState = ReturnType<typeof reducer>;

export const { lang, token, user, mockData, reset } = rootSlice.actions;
