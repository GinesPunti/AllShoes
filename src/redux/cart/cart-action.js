export const TOGGLE_CART= `TOGGLE_CART`;
export const ADD_PRODUCT=`ADD_PRODUCT`
export const CLEAN_CART=`CLEAN_CART`


export const toggleVisibleCart= ()=>({
    type: TOGGLE_CART,
});

export const addProduct= product =>({
    type:   ADD_PRODUCT,
    payload: product,

});

export const cleanCart= ()=>({
    type: CLEAN_CART,
})