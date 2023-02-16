import { ADD_FAVORITE, DELETE_FAVORITE, ORDER_CARD, FILTER_CARD } from "./actions-types"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    allFav: []
}

const reducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]     
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== payload)
            }
        case FILTER_CARD:
            const allCharactersFilter = state.allCharacters.filter((char) => char.gender === payload)
            return{
                ...state,
                myFavorites: allCharactersFilter
            }
        case ORDER_CARD:
            return{
                ...state,
                myFavorites:
                    payload === "Ascendente" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) => b.id - a.id)
            }
        default: return{...state}
    }
}

export default reducer;