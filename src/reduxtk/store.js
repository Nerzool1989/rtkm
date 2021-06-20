import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import topReducer from '../reduxtk/topReducer';

const reducer = {
    topReducer
}

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware()
});

export default store;
