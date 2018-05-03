/**
 * Created by Adrian on 22.03.2018.
 */

export const MealsReducer = (state={protein:[],carbon:[],fat:[],createdMeals:[]},action) => {
    switch(action.type){
        case "ADD_PRODUCT_PROTEIN":
            state.protein.push(action.product);
           return state;
        case "ADD_PRODUCT_CARBON":
            state.carbon.push(action.product);
            return state;
        case "ADD_PRODUCT_FAT":
            state.fat.push(action.product);
            return state;
        case "CHANGE_MAKRO":
            state.makro.protein = action.protein;
            state.makro.carbon = action.carbon;
            state.makro.fat = action.fat;
            return state;
        case "ADD_CREATED_MEAL":
            state.createdMeals.push(action.meal);
            return state;
        case "CLEAR_CREATED_MEALS":
            state.createdMeals = [];
            return state;
        default:
            return state;
    }
};