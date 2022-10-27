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
    }
})


export const {
    addMovie,
    updateMovie,
    deleteMovie,
} = watchLaterListSlice.actions
export default watchLaterListSlice.reducer;