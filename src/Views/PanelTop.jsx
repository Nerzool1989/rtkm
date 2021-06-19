import React from 'react';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';

const getTopReducer = (state) => state.topReducer;

const PanelTop = (props) => {

    const dispatch = useDispatch();
    
    return (
        <>
            <div>Счетчик</div>
            <Button color='primary'>
                INCREMENT
            </Button>
            <Button color='secondary'>
                DECREMENT
            </Button>
            <Button styleCustom>
                ASYNC INCREMENT
            </Button>
            <div></div>
        </>
    )
}


export default PanelTop;