import React from 'react'
import { connect } from 'react-redux'
import Cartcard from './Cartcard'
import {deleteFromCart,addToCart} from "../../Redux/actions/cartActions"


class Cart extends React.Component{
    

    onAddtoCart = (product) => {
        console.log("fired")
        this.props.addToCart(product,this.props.cart.cart)
    }

    generateTotatPrice = () => {
        console.log("fired")
     
        const pricearry = this.props.cart.cart.map((product) =>{ return product.quantity* product["discounted_price"]})
        let total = pricearry.reduce((acc, curre) => acc+curre)
        return (
            <p>{total}</p>
        )
    }
    onDeleteCart =(product) => {
        this.props.deleteFromCart(product,this.props.cart.cart)
    }

    generateCard = () => {
        return(  this.props.cart.cart.map(
        (product) => {return  <Cartcard key={product["pid"]} product={product} 
        addCart ={() => this.onAddtoCart(product)}
        deleteCart = {() => this.onDeleteCart(product)}
        />}))
      }

      componentDidMount = () => {
        if (!this.props.auth.isAuthenticated){
            this.props.history.push("/login");
        }
      }

        
    render(){
        console.log(this.props.cart)
        if(this.props.cart.cart.length===0){
            return (
                <div className="container-fluid" style={{textAlign: "center"}}>
                    <div className="row">
                        <h1 className="col display-4">No Products in Cart please add !!</h1>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="container">
                    <div className="row">
                        <h1 className="display-4 col-lg-12" style={{textAlign:"center"}}>Total Cart Price : {this.generateTotatPrice()}</h1>
                    </div>
                    <div className="row">
                    {this.generateCard()}
                    </div>
                </div>
            )
        }
    }
    
}

const mapStatetoProps = (state) => {
    return {
        cart : state.cart,
        auth : state.auth
    }
}

export default connect(mapStatetoProps,{deleteFromCart,addToCart})(Cart)