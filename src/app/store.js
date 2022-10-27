import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import watchLaterListSlice from '../features/movies/watchLaterListSlice';

const persistConfig = {
    key: 'moviesInStorage',
    storage,
}

const reducer = combineReducers({
    watchLaterList: watchLaterListSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export default store;