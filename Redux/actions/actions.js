/**
 * Created by Adrian on 11.03.2018.
 */

export function addProtein(protein) {
    return{
        type: 'ADD_PROTEIN',
        protein
    }
}

export function addCarbon(Carbon) {
    return{
        type: 'ADD_CARBON',
        Carbon
    }
}

export function addFat(fat) {
    return{
        type: 'ADD_FAT',
        fat
    }
}

export function addMealProtein(product) {
    return {
        type: 'ADD_PRODUCT_PROTEIN',
        product
    }
}

export function addMealCarbon(product) {
    return {
        type: 'ADD_PRODUCT_CARBON',
        product
    }
}

export function addMealFat(product) {
    return {
        type: 'ADD_PRODUCT_FAT',
        product
    }
}

export function changeMakro(protein, carbon, fat) {
    return{
        type: 'CHANGE_MAKRO',
        protein,
        carbon,
        fat
    }
}

export function addMakroProduct(product,index,typer) {
    return{
        type:'ADD_MAKRO_PRODUCT',
        product,
        index,
        typer
    }
}

export function addCreatedMeal(meal) {
    return {
        type: 'ADD_CREATED_MEAL',
        meal
    }
}

export function clearCreatedMeals() {
    return{
        type: 'CLEAR_CREATED_MEALS'
    }
}

export function addBmrProperties(sex,weight,height,age,activity,target) {
    return {
        type: 'ADD_BMR_PROPERTIES',
        sex,
        weight,
        height,
        age,
        activity,
        target
    }
}