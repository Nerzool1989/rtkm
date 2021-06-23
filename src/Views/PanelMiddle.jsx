import React from 'react';
import {unwrapResult} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {Grid, TextField} from '@material-ui/core';
import CustomTable from '../components/CustomTable';
import Button from '../components/Button';
import SelectCustom from '../components/SelectCustom';
import { getProductAndGroup, changeProductsAction, saveProducAction } from '../reduxtk/middleReducer';
import { setStatusResponse } from '../reduxtk/bottomReducer';

const getMiddleReducer = (state) => state.middleReducer;

const PanelMiddle = (props) => {
    const dispatch = useDispatch()

    const {
        productGroup, productList, disabled, isSaveSuccess, productsFixation
    } = useSelector(getMiddleReducer);


    const getProducts = async () => {
        dispatch(getProductAndGroup())
            .then(unwrapResult)
            .then((data) => dispatch(setStatusResponse(data)))

    }

    const saveProducts = async () => {
        dispatch(saveProducAction(productList))
            .then(unwrapResult)
            .then((result) => dispatch(setStatusResponse(result)))
        
    }

    const handleTextAndSelect = (id) => (e) => {
        const newProduct = {id: id, [e.target.name]: e.target.value};
        dispatch(changeProductsAction(newProduct))
    }
    
    return (
        <>
            <Button color='primary' onClick={getProducts} disabled={disabled}>
                Get product list
            </Button>
            {isSaveSuccess ?
                <CustomTable table={productsFixation}/>
                :
                <Grid item>
                    {productList.map((item) => (
                        <Grid item key={item.id}>
                            <TextField 
                                id={`${item.id}`} label="Описание" variant="outlined"
                                value={item.description || ''}
                                onChange={handleTextAndSelect(item.id)}
                                name='description'
                            />
                            <SelectCustom 
                                list={productGroup} value={item.productGroup}
                                handleChange={handleTextAndSelect(item.id)}
                                name='productGroup'
                            />
                        </Grid>
                    ))}
                </Grid>
            }
            <Button color='secondary' onClick={saveProducts} disabled={disabled}>SAVE</Button>
        </>
    )
}

export default PanelMiddle;