import React from 'react';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, asyncIncrementAction} from '../reduxtk/topReducer';

const getTopReducer = (state) => state.topReducer;

const PanelTop = (props) => {
    const dispatch = useDispatch();
    const {counter, action, disabled} = useSelector(getTopReducer);
    
    return (
        <>
            <div>Счетчик {counter}</div>
            <Button color='primary' onClick={() => dispatch(increment())}>
                INCREMENT
            </Button>
            <Button color='secondary' onClick={() => dispatch(decrement())}>
                DECREMENT
            </Button>
            <Button styleCustom onClick={()=>dispatch(asyncIncrementAction())} disabled={disabled}>
                ASYNC INCREMENT
            </Button>
            <div>{action}</div>
        </>
    )
}


export default PanelTop;