import axios from "axios";
import { SET_PRODUCTS } from "./types";

export const getProducts = keyword => dispatch => {
    axios
        .post("/product/getProduct/null")
        .then((products) => {

        })
} 


export const setProducts = (products) => {
    return {
        type : SET_PRODUCTS,
        payload : products
    }
}
