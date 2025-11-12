import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = "https://67e4f4b118194932a583d5b1.mockapi.io/expanse/tourData";

export const fetchTours = createAsyncThunk("tour/fetchtours", async () => {
    const response = await axios.get(API_URL);
    return response.data.reverse();
});

export const addTour = createAsyncThunk("tour/addTour", async  (newTour) => {
    const response = await axios.post(API_URL,newTour);
    return response.data;
})

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tours: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) =>{
        builder

        .addCase(fetchTours.pending, (state) => {
            state.loading = true;
        })

        .addCase(fetchTours.fulfilled, (state, action) => {
            state.loading = false;
            state.tours = action.payload;
        })

        .addCase(fetchTours.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(addTour.fulfilled, (state, action) => {
            state.tours.unshift(action.payload);
        });

    },
});

export default tourSlice.reducer;
