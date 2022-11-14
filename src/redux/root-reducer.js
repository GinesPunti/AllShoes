import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart/cart-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { productReducer } from "./products/product-reducer";

const rootReducer=combineReducers({
    categories: categoriesReducer,
    products: productReducer,
    cart: cartReducer,
})

export default persistReducer(
    {
        key: "root",
        storage: storage,
        blacklist: [],
    }
,rootReducer)

