import { createReducer, createAction, createAsyncThunk} from "@reduxjs/toolkit";

const increment = (state, action) => ({...state, counter: state.counter + 1, action: 'Увеличили'})

const decrement = (state, action) => {
    state.counter = state.counter - 1;
    state.action = 'Уменьшили'
}

const asyncIncrementSuccess = (state, action) => {
    state.counter += 2;
    state.action = 'Увеличили асинхронно'
}
const disabled = (state, action) => {state.disabled = action.payload}

const matcher = (state,action) => console.log('action.type - ', action.type)

const defaultCase = (state, action) => console.log(action);

const initialState = {
    counter: 0,
    action: '',
    disabled: false
};



const topReducer = (state = initialState, action) => {return state};

export default topReducer;