import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusResponse: '-',
};

const bottomReducer = createSlice({
    name: "bottomReducer",
    initialState,
    reducers: {
        setStatusResponse: {
            reducer: (state, action) => {state.statusResponse = action.payload},
            prepare: (data) => {
                const messageStatus = (data.success) ? 'Успешно получили' : 'Неудача';
                return {payload: messageStatus}
            }
        }
    },
    extraReducers: {
    }
})

export const {setStatusResponse} = bottomReducer.actions;

export default bottomReducer.reducer;
