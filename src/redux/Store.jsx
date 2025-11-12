import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import tourReducer from './tourSlice';

const Store = configureStore({
    reducer:{
        tour: tourReducer,
    },
});

export default Store
