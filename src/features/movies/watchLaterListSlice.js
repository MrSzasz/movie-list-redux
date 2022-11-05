import {
    createSlice
} from "@reduxjs/toolkit";

import toast from 'react-hot-toast';
const notifySuc = () => toast.success('Movie added successfully!');
const notifyErr = () => toast.error('Movie already on list!');

const initialState = [];

export const watchLaterListSlice = createSlice({

    name: 'watchLaterList',

    initialState,

    reducers: {
        addMovie: (state, action) => {
            const findMovie = state.indexOf(state.find(movie => movie.id === action.payload.id))
            if (findMovie === -1) {
                state.push(action.payload)
                notifySuc();
            } else {
                notifyErr();
            }
        },

        deleteMovie: (state, action) => {
            state.splice(state.indexOf(state.find(movie => movie.id === action.payload)), 1)
        },

        addFav: (state, action) => {
            const findMovie = state.find(movie => movie.id === action.payload)
            if (findMovie) {
                findMovie.fav = !findMovie.fav
            }
        },
    }
})


export const {
    addMovie,
    updateMovie,
    deleteMovie,
    addFav,
} = watchLaterListSlice.actions
export default watchLaterListSlice.reducer;