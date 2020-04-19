
import actions from "./actions";
import products from "../Data/sampledata";


const online_store = {

    Products : products,
    Cart : [],
    CurrentProduct : {
        pid : "L001",
        Name :  "Mac Book Pro",
        Manufacturer : "Apple",
        Image : "https://mk0beetstechqtgw52p3.kinstacdn.com/wp-content/uploads/MacBook-Pro-Unibody-13-10.6-Snow-Leopard-800x800-1.png",
        Description : "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.",
        Price : "50000",
        Seller : "Cloud Tail",
    }

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
                
                state.Cart = []
                console.log(state)
                return {...state}
            }
            case actions.ADD_CURRENT_PRODUCT:{
                state.CurrentProduct = {...action.product}
                console.log(state.CurrentProduct)
                return {...state}
            }
            default : return {...state}
                
        }
}

export default onlineStoreReducer