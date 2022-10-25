import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = [];

export const favMovieListSlice = createSlice({

    name: 'favMovieList',

    initialState,

    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload)
        },

        deleteMovie: (state, action) => {
            state.splice(state.indexOf(state.find(movie => movie.id === action.payload)), 1)
        }

    }
})


export const {
    addMovie,
    updateMovie,
    deleteMovie,
} = favMovieListSlice.actions
export default favMovieListSlice.reducer;