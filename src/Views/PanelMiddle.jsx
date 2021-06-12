import React from 'react';
import Button from '../components/Button';
import {Grid, TextField} from '@material-ui/core';
import SelectCustom from '../components/SelectCustom';


const PanelMiddle = (props) => {

    
    return (
        <>
            <Button color='primary'>
                Get product list
            </Button>
            <Grid item>
            </Grid>
            <Button color='secondary'>SAVE</Button>
        </>
    )
}

export default PanelMiddle;