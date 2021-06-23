import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {getProductGroup, getProductList, saveProductList} from '../api/api'

const initialState = {
    productGroup: [],
    productList: [],
    disabled: false,
    isSaveSuccess: false,
    productsFixation: []
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

const saveProducAction = createAsyncThunk(
    'middleReducer/saveProducAction',
    async (productList, thunkApi) => {
        thunkApi.dispatch(disabledButton(true));
        const {success, body} = await saveProductList(productList);
        thunkApi.dispatch(disabledButton(false)); 
        if(success){
           return {success, body}
        }
        return {success: false}
    }
)

const middleReducer = createSlice({
    name: 'middleReducer',
    initialState,
    reducers: {
        disabledButton: (state, action) => {state.disabled = action.payload},
        changeProductsAction: (state, action) => {
           state.productList = state.productList.map((item) => 
                (item.id === action.payload.id) ? {...item, ...action.payload} : item
            )
        }   
    },
    extraReducers: builder => {
        builder
            .addCase(getProductAndGroup.fulfilled, (state, action) => {
                    if(action.payload.success){
                        const {productGroupData, productListData} = action.payload;
                        state.productGroup = productGroupData.list;
                        state.productList = productListData.list;
                        state.isSaveSuccess = false;
                    } 
                }
            )
            .addCase(saveProducAction.fulfilled, (state, action) => {
                    if(action.payload.success){
                        state.isSaveSuccess = action.payload.success
                        state.productsFixation = action.payload.body
                    }
                }
            )
    }
})

export {getProductAndGroup, saveProducAction};

export const {disabledButton, changeProductsAction} = middleReducer.actions;

export default middleReducer.reducer;