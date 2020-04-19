import { SET_PRODUCTS } from "../types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}