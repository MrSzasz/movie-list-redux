import { configureStore } from '@reduxjs/toolkit'
import favMovieListSlicer from '../features/movies/favMovieListSlice';

const store = configureStore({
    favMovieList: favMovieListSlicer
})

export default store;