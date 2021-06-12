import {configureStore} from '@reduxjs/toolkit';
import topReducer from './topReducer';

const reducer = {topReducer}

const customMiddleWare = store => next => action => {
    // console.log('middleware',store.getState())
    return next(action);
}

const defaultMiddleWare = (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare);


const store = configureStore({
    reducer,
    middleware: defaultMiddleWare,
});

export default store;