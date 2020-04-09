
import actions from "./actions";
import products from "../Data/sampledata";


const online_store = {

    Products : products,
    Cart : []

}

 const onlineStoreReducer = (state = online_store,action) => {
        switch(action.type){
           
            case actions.ADD_TO_CART :{
                let id = action.product.pid;
                
                if(state.Cart.some((product) => product.pid === id)){
                    let newState = state.Cart.map(
                        function(product){
                            if(product.pid=== id){
                                product.quantity = product.quantity+1
                            }

                            return product
                        }
                    )

                    state.Cart = [...newState]
                    console.log(state.Cart)
                    return {...state}
                }

                else {
                    let product = {...action.product,quantity : 1 }
                    state.Cart.push(product)
                    console.log(state)
                    return {...state}
                }

               

            }
            case actions.CLEAR_CART :{
                console.log("Event fired")
                state.Cart = []
                console.log(state)
                return {...state}
            }
            default : return {...state}
                
        }
}

export default onlineStoreReducer