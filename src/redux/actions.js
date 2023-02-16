import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARD, ORDER_CARD } from "./actions-types";

export const addFavorite = (character) =>{
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export const deleteFavorite = (id) =>{
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filterCards = (gender) =>{
    return{
        type: FILTER_CARD,
        payload: gender
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER_CARD,
        payload: id
    }
}
