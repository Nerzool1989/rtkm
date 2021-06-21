import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import topReducer from '../reduxtk/topReducer';
import middleReducer from './middleReducer';
import bottomReducer from './bottomReducer';

const reducer = {
    topReducer, 
    middleReducer,
    bottomReducer
}

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware()
});

export default store;
