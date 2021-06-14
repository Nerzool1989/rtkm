import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/Button';
import {Grid, TextField} from '@material-ui/core';
import SelectCustom from '../components/SelectCustom';
import CustomTable from '../components/CustomTable';


const PanelMiddle = (props) => {
    const dispatch = useDispatch();

    const getProducts = async () => {}
    const saveProducts = async () => {}

    
    return (
        <>
            <Button color='primary' onClick={getProducts}>
                Get product list
            </Button>
            <Button color='secondary' onClick={saveProducts}>SAVE</Button>
        </>
    )
}

export default PanelMiddle;