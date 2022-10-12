import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = [{
    id: 'hq',
    name: 'scarface',
    desc: 'Tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in Miami during the Mariel boatlift and becomes a powerful and extremely homicidal drug lord.'
}];

export const favMovieListSlice = createSlice({

    name: 'favMovieList',

    initialState,

    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload)
        },

        updateMovie: (state, action) => {
            const {id, name, desc} = action.payload
            const movieToUpdate = state.find(movie => movie.id === id)
            movieToUpdate.name = name
            movieToUpdate.desc = desc
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