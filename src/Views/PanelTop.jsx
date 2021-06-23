import React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import {useDispatch, useSelector} from 'react-redux';
import { asyncIncrementAction, decrementAction, incrementAction } from '../reduxtk/topReducer';

const getTopReducer = (state) => state.topReducer;

const PanelTop = (props) => {

    const dispatch = useDispatch();
    const {counter, action, disabled} = useSelector(getTopReducer);
    
    return (
        <>
            <h3>Счетчик <Text border>{counter}</Text></h3>
            <Button color='primary' onClick={()=>dispatch(incrementAction())}>
                INCREMENT
            </Button>
            <Button color='secondary' onClick={() => dispatch(decrementAction())}>
                DECREMENT
            </Button>
            <Button styleCustom onClick={() => dispatch(asyncIncrementAction())} disabled={disabled}>
                ASYNC INCREMENT
            </Button>
            <h3>{action}</h3>
        </>
    )
}


export default PanelTop;