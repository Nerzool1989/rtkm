import { createReducer, createAction, createAsyncThunk, current} from "@reduxjs/toolkit";

const increment = (state, action) => ({...state, counter: state.counter + 1, action: 'Увеличили'});

const decrement = (state, action) => {
    console.log('before', current(state));
    state.counter = state.counter - 1;
    state.action = 'Уменьшили';
    console.log('after', current(state))
};

const asyncIncrementSuccess = (state, action) => {
    state.counter += 2;
    state.action = 'Увеличили асинхронно'
};

const disabled = (state, action) => {state.disabled = action.payload};

const matcher = (state,action) => console.log('action.type - ', action.type);
const matcherReject = (state, action) => {state.action = action.error.message};

const defaultCase = (state, action) => console.log(action.type, "- Экшен не нашелся");

const initialState = {
    counter: 0,
    action: '',
    disabled: false
};

export const incrementAction = createAction('topReducer/increment');
export const decrementAction = createAction('topReducer/decrement');
export const disabledAction = createAction('topReducer/disabled');

export const asyncIncrementAction = createAsyncThunk(
    'topReducer/asyncIncrementAction',
    async (_, thunkApi) => {
        thunkApi.dispatch(disabledAction(true))
        await new Promise(resolve => setTimeout(resolve, 3000))
        thunkApi.dispatch(disabledAction(false))
        return Promise.reject(new Error("У меня ошибка"))
    }
)


// const topReducer = createReducer(
//     initialState,
//     (builder) => {
//         builder
//             .addCase(incrementAction, increment)
//             .addCase(decrementAction, decrement)
//             .addCase(asyncIncrementAction.fulfilled, asyncIncrementSuccess)
//             .addCase(disabledAction, disabled)
//             .addMatcher(action => action, matcher)
//             .addMatcher((action) => action.type === 'topReducer/asyncIncrementAction/rejected', matcherReject)
//             .addDefaultCase(defaultCase)
//     }
// )

const topReducer = createReducer(
    initialState, 
    {
        [incrementAction]: increment,
        [asyncIncrementAction.fulfilled]: asyncIncrementSuccess,
    },
    [
        {
            matcher: (action) => (action.type === 'topReducer/asyncIncrementAction/rejected'),
            reducer: matcherReject
        }
    ],
    // (state, action) => {console.log(action.type, 'Я не узнал')}
    
)


export default topReducer;