/**
 * Created by Adrian on 15.03.2018.
 */

export const ProductReducer = (state={protein: [],carbon: [], fat: []},action)=>{
    switch(action.type) {
        case "ADD_PROTEIN":
            console.log('Dodalem protein');
            state.protein.push(action.protein);
            return state;
        case "ADD_CARBON":
            state.carbon.push(action.Carbon);
            return state;
        case "ADD_FAT":
            state.fat.push(action.fat);
            return state;
        default:
            return state;
    }
};