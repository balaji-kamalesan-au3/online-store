
import actions from "./actions";
import products from "../Data/sampledata";


const online_store = {

    Products : products,
    Cart : []

}

 const onlineStoreReducer = (state = online_store,action) => {
        switch(action.type){
           
            case actions.ADD_TO_CART :{
                
                let product = action.product
                
                state.Cart.push(product)
                console.log(state)
                return {...state}

            }

            default : return {...state}
                
        }
}

export default onlineStoreReducer