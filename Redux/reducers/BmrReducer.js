/**
 * Created by Adrian on 18.04.2018.
 */

export const BmrReducer = (state=[],action) =>{
    switch(action.type){
        case 'ADD_BMR_PROPERTIES':
            let object = {sex: action.sex, weight: action.weight, height: action.height, age: action.age, activity: action.activity, target: action.target};
            state[0] = object;
            return state;
        default:
            return state;
    }
};
