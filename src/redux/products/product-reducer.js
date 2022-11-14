import { Products } from "../../data/Products"

const INITIAL_STATE= {products: Products}
export const productReducer= (state = INITIAL_STATE, action) => {

    const {type, payload}= action;
    
    switch(type){
        default:
            return state;
    }

}