import actions from "./actions";

const addCurrentProduct = (product) => (
     {
        type : actions.ADD_CURRENT_PRODUCT,
        product : product
    }
)

export default addCurrentProduct