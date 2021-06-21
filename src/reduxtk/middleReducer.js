import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getProductGroup, getProductList} from '../api/api'

const initialState = {
    productGroup: [],
    productList: [],
    disabled: false,
}


const getProductAndGroup = createAsyncThunk(
    'middleReducer/getProductAndGroup',
    async (_, thunkApi) => {
        thunkApi.dispatch(disabledButton(true));
        const productGroupData = await getProductGroup();
        const productListData = await getProductList();
        thunkApi.dispatch(disabledButton(false)); 
        if(productListData.success && productGroupData.success){
           return {success: true, productGroupData, productListData}

        }
        return {success: false}
    }
)


const middleReducer = createSlice({
    name: 'middleReducer',
    initialState,
    reducers: {
        disabledButton: (state, action) => {state.disabled = action.payload}
    },
    extraReducers: builder => {
        builder.addCase(
            getProductAndGroup.fulfilled, (state, action) => {
                if(action.payload.success){
                    const {productGroupData, productListData} = action.payload;
                    state.productGroup = productGroupData.list;
                    state.productList = productListData.list;
                } 
            }
        )
    }
})

export {getProductAndGroup};

export const {disabledButton} = middleReducer.actions;

export default middleReducer.reducer;