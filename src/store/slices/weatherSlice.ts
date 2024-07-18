import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    city: null | string,
    forecast: 'NOW' | '5-DAYS',
    time: Date,
    unit: 'metric' | 'standard' | 'imperial',
    type: 'AM/PM' | '24H'
}

export const initialState: IinitialState = {
    city: null,
    time: new Date(),
    forecast: 'NOW',
    unit: 'metric',
    type: '24H'
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        },
        setForecast: (state, action) => {
            state.forecast = action.payload
        },
        setTime: (state, action) => {
            state.time = action.payload
        },
        setUnit: (state, action) => {
            state.unit = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        }
    },
});

export const {
    setCity,
    setForecast,
    setTime,
    setUnit,
    setType
} = weatherSlice.actions;

export default weatherSlice.reducer;
