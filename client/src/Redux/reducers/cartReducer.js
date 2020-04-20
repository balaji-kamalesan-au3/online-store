import { ADD_TO_CART } from "../types"

const intialState ={
    cart : []
}

export default (state = intialState, action) => {
    switch (action.type){
        case ADD_TO_CART: {
            
            return {...state,cart : action.payload}
        }
    }
    return {...state}
}