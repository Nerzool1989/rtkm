import React from 'react';
import { useSelector } from 'react-redux';

const getBottomReducer = (state) => state.bottomReducer;

const PanelBottom = () => {

    const {statusResponse} = useSelector(getBottomReducer);

    return (
        <div>{statusResponse}</div>
    )
}


export default PanelBottom;