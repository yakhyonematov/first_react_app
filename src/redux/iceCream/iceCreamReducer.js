import { BUY_ICECREAM } from "./IceCreamAction";

const initialState = { 
    numofIceCream: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state, 
            numofIceCream: state.numofIceCream - 1
        } 
        default:
            return state;
    }
}