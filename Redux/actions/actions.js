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