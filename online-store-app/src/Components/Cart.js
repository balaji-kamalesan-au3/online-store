import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import ProductCard from './productCard'


class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            CartItems : null || this.props.cart
        }
    }
        
    render(){
        console.log(this.state)
        return(
            <div> 
                <NavBar />
                <div className="container-fluid">
                        <div className="row">
                            {this.state.CartItems.map(
                                (product) => <ProductCard key = {product.pid} {...product} onClick = {() => this.props.addtoCart(product)} />
                            )}
                        </div>
                    </div>
            </div>
        )
    }
    
}

const mapStatetoProps = (state) => {
    return {
        cart : state.Cart
    }
}

export default connect(mapStatetoProps)(Cart)