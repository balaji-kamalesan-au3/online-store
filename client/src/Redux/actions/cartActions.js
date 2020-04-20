import { ADD_TO_CART } from "../types";

export const addToCart = (product, cart) => dispatch =>  {
    let pid = product["pid"];


    if(cart.length === 0){
        product.quantity = 1;
        cart.push(product);
    }
    else {
        const index = cart.map((product) => product["pid"] ).indexOf(pid);
        if(index !== -1){
            increaseProductQuantity(cart,index);
        }
        else {
            product.quantity = 1;
            cart.push(product);
        }
    }
    console.log(cart)
    
    dispatch(dispatchAddCart(cart));

}

export const deleteFromCart = (product, cart) =>dispatch => {
    let pid = product["pid"];
    const i = cart.map((product) => product["pid"] ).indexOf(pid);
    const currentproduct = cart[i];
    if(currentproduct.quantity >=2){
        currentproduct.quantity = product.quantity-1;
    }
    else {
        cart.splice(i,1);        
    }
    dispatch(dispatchAddCart(cart));
}

const increaseProductQuantity = (cart, i) => {
    cart[i].quantity = cart[i].quantity+1;
}



const dispatchAddCart = (cart) => {
    return {
        type : ADD_TO_CART,
        payload : cart
    }
}