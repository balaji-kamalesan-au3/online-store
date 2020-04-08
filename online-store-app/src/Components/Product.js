import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import ProductCard from './productCard'
import {bindActionCreators} from 'redux'
import addToCart from '../Redux/action_creators'

 

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            laptops : null || this.props.products.laptops,
            mobiles : null || this.props.products.mobiles
        }
    }

    // componentDidMount(){
    //     this.setState((state,props) => {
    //         return {laptops : props.products.laptops}
    //     })
    // }
  


 

    render(){
        console.log(this.props)
        if(this.state.laptops !== null) {
            return (
                <Fragment>
                   
                    <div className="container-fluid">
                        <div className="row">
                            {this.state.laptops.map(
                                (product) => <ProductCard key = {product.pid} {...product} onClick = {() => this.props.addtoCart(product)} />
                            )}
                        </div>
                    </div>

                </Fragment>
                
            )

            
        }
        else {
           return (
             <div> 
                 Loading... 
            </div>
           )
        }

       
    }

}
const mapStatetoProps = (state) => {
    return {
        products : state.Products
    }
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({addtoCart : addToCart},dispatch)
}
export default  connect(mapStatetoProps,mapDispatchtoProps)(Product)