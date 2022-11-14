import { ADD_PRODUCT, CLEAN_CART, TOGGLE_CART } from "./cart-action";
import { addItemCart } from "./cart-untils";

const INITIAL_STATE={
    items: [],
    price: 0,
    visible: false,
}

export const cartReducer=(state=INITIAL_STATE, action)=>{
    const {type, payload}= action;

    switch(type){
        case TOGGLE_CART:
            return{
                ...state,
                visible: !state.visible,
            }
        case ADD_PRODUCT:
            return{
                ...state,
                items: addItemCart(state.items, payload),
            }
        case CLEAN_CART:
            return{
                ...state,
                items: [],
                price: 0,
            }
        default:
            return state;
    }


}