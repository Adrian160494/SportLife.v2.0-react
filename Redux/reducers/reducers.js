import React from 'react';
import {createStore,combineReducers} from 'redux';
import {ProductReducer} from './PoductReducer.js';
import {MealsReducer} from './MealsReducer.js';
import {CalculatorReducer} from './CalculatorReducer.js';
import {BmrReducer} from './BmrReducer.js';
import * as actions from '../actions/actions.js';

export const rootReducer = combineReducers({
        ProductReducer,
        MealsReducer,
        CalculatorReducer,
        BmrReducer
    });

export const store = createStore(rootReducer);

export const mapStateToProps = (state) => {
    return{
            products: state.ProductReducer,
            mealProducts: state.MealsReducer,
            makroProducts: state.CalculatorReducer,
            bmrReducer: state.BmrReducer
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
        addFat: (fat) => dispatch(actions.addFat(fat)),
        addProteinProduct: (product) => dispatch(actions.addMealProtein(product)),
        addCarbonProduct: (product) => dispatch(actions.addMealCarbon(product)),
        addFatProduct: (product) => dispatch(actions.addMealFat(product)),
        changeMakro: (protein,carbon,fat) => dispatch(actions.changeMakro(protein,carbon,fat)),
        addMakroProduct: (product,index,type) => dispatch(actions.addMakroProduct(product,index,type)),
        addBMRProps: (sex,weight,height,age,activity,target) => dispatch(actions.addBmrProperties(sex,weight,height,age,activity,target)),
        addCreatedMeal: (meal) => dispatch(actions.addCreatedMeal(meal)),
        clearCreatedMeals: () => dispatch(actions.clearCreatedMeals())
    };
};

