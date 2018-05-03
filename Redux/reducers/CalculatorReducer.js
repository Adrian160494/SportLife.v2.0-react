/**
 * Created by Adrian on 14.04.2018.
 */

import React from 'react';

export const CalculatorReducer = (state=[],action) =>{
    switch(action.type){
        case "ADD_MAKRO_PRODUCT":
            let object = {product:action.product,index:action.index,type:action.typer};
            state.push(object);
            console.log(object);
            return state;
        default:
            return state;
    }
};