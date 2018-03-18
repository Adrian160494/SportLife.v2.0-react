import React from 'react';
import {createStore,combineReducers} from 'redux';
import {ProductReducer} from './PoductReducer.js';
import * as actions from '../actions/actions.js';

export const rootReducer = combineReducers({
        ProductReducer,
    });

export const store = createStore(rootReducer);

export const mapStateToProps = (state) => {
    return{
            products: state.ProductReducer,
        };
};

store.subscribe(
    ()=>{
        console.log(store.getState());
    }
);

export const mapDispatchToProps = (dispatch) =>{
    return{
        addProtein: (protein) => dispatch(actions.addProtein(protein)),
        addCarbon: (Carbon) => dispatch(actions.addCarbon(Carbon)),
        addFat: (fat) => dispatch(actions.addFat(fat))
    };
};

