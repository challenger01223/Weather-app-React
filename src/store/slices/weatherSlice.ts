import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
}

export const initialState: IinitialState = {

};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {

        },
    },
});

export const {
    setCurrentUser,
} = weatherSlice.actions;

export default weatherSlice.reducer;
