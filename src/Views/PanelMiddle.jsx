import React from 'react';
import {unwrapResult} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/Button';
import { getProductAndGroup } from '../reduxtk/middleReducer';
import { setStatusResponse } from '../reduxtk/bottomReducer';

const getMiddleReducer = (state) => state.middleReducer;

const PanelMiddle = (props) => {
    const dispatch = useDispatch()

    const {
        productGroup, productList, disabled,
    } = useSelector(getMiddleReducer);


    const getProducts = async () => {
        dispatch(getProductAndGroup())
            .then(unwrapResult)
            .then((data) => dispatch(setStatusResponse(data)))

    }
    
    return (
        <>
            <Button color='primary' onClick={getProducts} disabled={disabled}>
                Get product list
            </Button>
            <Button color='secondary' disabled={disabled}>SAVE</Button>
        </>
    )
}

export default PanelMiddle;