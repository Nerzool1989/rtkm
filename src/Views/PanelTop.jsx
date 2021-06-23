import React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import {useDispatch, useSelector} from 'react-redux';

const getTopReducer = (state) => state.topReducer;

const PanelTop = (props) => {

    const dispatch = useDispatch();
    
    return (
        <>
            <h3>Счетчик <Text border></Text></h3>
            <Button color='primary'>
                INCREMENT
            </Button>
            <Button color='secondary'>
                DECREMENT
            </Button>
            <Button styleCustom>
                ASYNC INCREMENT
            </Button>
            <h3></h3>
        </>
    )
}


export default PanelTop;