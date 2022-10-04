import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = [];

export const favMovieListSlice = createSlice({
    name: 'favMovieList',
    initialState,
    reducers: {}
})

export default favMovieListSlice.reducer;