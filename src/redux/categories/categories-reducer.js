import { Categories } from "../../data";
import { SELECT_CATEGORIE } from "./categories-action";

const INITIAL_STATE= {
    categories: Categories,
    selectedCategorie: null,
};

export const categoriesReducer= (
    state= INITIAL_STATE, 
    action,
    )=>{

    const {type, payload}= action;
    
    switch(type){
        case SELECT_CATEGORIE:
            return{
                ...state,
                selectedCategorie: payload,
            }


        default:
            return state;
    }
}

