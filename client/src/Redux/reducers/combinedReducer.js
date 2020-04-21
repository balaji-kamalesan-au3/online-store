import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer"
import cartReducer from "./cartReducer";

export default combineReducers({
    auth : authReducer,
    error : errorReducer,
    products : productReducer,
    cart : cartReducer
})              