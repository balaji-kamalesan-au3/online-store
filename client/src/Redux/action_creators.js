import actions from "./actions"

 const addToCart = (product) => 
    ({
        type : actions.ADD_TO_CART,
        product : product
    })


export default addToCart