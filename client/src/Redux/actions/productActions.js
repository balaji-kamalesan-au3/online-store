import axios from "axios";


import {
  SET_PRODUCTS, GET_ERRORS
} from "../types";


export const getProducts = (query) => dispatch => {
  axios
    .get(`/product/getProduct/${query}`)
    .then(products => {
        console.log(products);
        dispatch(setProduct(products));
    }) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

const setProduct = (products) => {
    return {
        type : SET_PRODUCTS,
        payload : products
    }
}



