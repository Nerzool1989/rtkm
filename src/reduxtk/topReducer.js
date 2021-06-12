import {createAction, createAsyncThunk, createReducer, current} from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    action: '',
    disabled: false
}

export const increment = createAction('topReducer/increment');
export const decrement = createAction('topReducer/decrement');
// export const disabled = createAction('topReducer/disabled');


//ЗАБЫЛИ ЭКШЕН В СТЕЙТЕ
export const asyncIncrementAction = createAsyncThunk(
    'topReducer/asyncIncrementAction',
    async (_,thunkApi) => {
        await new Promise(resolve => setTimeout(resolve, 3000))
    }
)
//"topReducer/asyncIncrementAction/pending"

const topReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => ({...state, counter: state.counter + 1}))
        .addCase(decrement, (state, action) => {
            // console.log('before',current(state));
            state.counter = state.counter - 1
            // console.log('after', current(state))
        })
        .addCase(asyncIncrementAction.fulfilled, (state, action) => {state.counter += 2})
        .addMatcher((action) => action, (state, action) => {console.log('action type -', action.type)} )

        .addDefaultCase((state, action) => console.log(state, action))
})



export default topReducer;