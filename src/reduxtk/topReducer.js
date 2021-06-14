import {createAction, createAsyncThunk, createReducer, current} from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    action: '',
    disabled: false
}

export const increment = createAction('topReducer/increment');
export const decrement = createAction('topReducer/decrement');
export const disabled = createAction('topReducer/disabled');

export const asyncIncrementAction = createAsyncThunk(
    'topReducer/asyncIncrementAction',
    async (_,thunkApi) => {
        // thunkApi.dispatch(disabled(true));
        await new Promise(resolve => setTimeout(resolve, 3000));
        thunkApi.dispatch(disabled(false));
        // return Promise.reject(new Error('У меня ошибка'))
    }
)
//"topReducer/asyncIncrementAction/pending"

// const topReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(increment, (state, action) => ({...state, counter: state.counter + 1, action: 'Увеличили'}))
//         .addCase(decrement, (state, action) => {
//             // console.log('before',current(state));
//             state.counter = state.counter - 1;
//             state.action = 'Уменьшили'
//             // console.log('after', current(state))
//         })
//         .addCase(disabled, (state, action) => {state.disabled = action.payload})
//         .addCase(asyncIncrementAction.pending, (state, action) => {state.disabled = true})
//         .addCase(asyncIncrementAction.fulfilled, (state, action) => {
//             state.counter += 2;
//             state.action = 'Увеличили асинхронно'
//         })
//         .addMatcher((action) => action, (state, action) => {console.log('action type -', action.type)} )
//         .addMatcher((action) => action.type === 'topReducer/asyncIncrementAction/rejected', (state, action) => {state.action = action.error.message;})

//         .addDefaultCase((state, action) => console.log(state, action))
// })
const topReducer = createReducer(
    initialState, 
    {
    [increment]: (state, action) => ({...state, counter: state.counter + 1, action: 'Увеличили'}),
    [asyncIncrementAction.fulfilled]: (state, action) => {state.counter += 2;state.action = 'Увеличили асинхронно'},
    },
    [
        {
            matcher: (action) => (action.type === 'topReducer/asyncIncrementAction/rejected'),
            reducer(state, action){console.log('action type -', action.type)}
        }
    ],
    (state) => {console.log(current(state))}
    
)

export default topReducer;