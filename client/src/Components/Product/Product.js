import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {getProducts} from "../../Redux/actions/productActions"
import {addToCart} from "../../Redux/actions/cartActions"
import ProductCard from './productCard';
import isEmpty from 'is-empty'



 

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            loading : true,
            query : "",
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getProducts(null)
    }


    onAddtoCart = (product) => {
        console.log("fired")
        this.props.addToCart(product,this.props.cart.cart)
    }

    generateCard = () => {
      return(  this.props.products.data.map(
      (product) => {return  <ProductCard key={product["pid"]} product={product} addCart ={() => this.onAddtoCart(product)}/>})
            )
   
    }
    
    onCategoryChange = (e) => {
        this.props.getProducts(e.target.value)
      }
  
    componentDidMount() {
        if (!this.props.auth.isAuthenticated){
            this.props.history.push("/login");
        }

        this.props.getProducts(null);

    }

 

    render(){
        console.log(this.props)

        if(isEmpty(this.props.products)){
            return(
                <div>Products are empt</div>
            )
        }
        else {
            return (
                <Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 container-fluid">
                                <div className="row">
                                    <div className="col-sm-12" style={{textAlign: "center", padding: "10px 0"}}>
                                        <h4>Popular Categories</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn btn-info col-lg-12" value="clothing" onClick={this.onCategoryChange}>Clothing</button>
                                </div>
                                <div className="row">
                                    <button className="btn btn-info col-lg-12" value="mobile" onClick={this.onCategoryChange}>Mobile</button>
                                </div>
                                <div className="row">
                                    <button className="btn btn-info col-lg-12" value="furniture" onClick={this.onCategoryChange}>Furniture</button>
                                </div>
                                <div className="row">
                                    <button className="btn btn-info col-lg-12" value="footwear" onClick={this.onCategoryChange}>Footwear</button>
                                </div>
                            </div>
                            <div className="col-lg-10 row">
                            {this.generateCard()}
                            </div>
                            
                        </div>
                    </div> 

                </Fragment>    
            )
        }
            
    }

}

const mapStatetoProps = state => ({
    errors : state.errors,
    auth: state.auth,
    products : state.products,
    cart : state.cart
})


export default  connect(mapStatetoProps,{getProducts, addToCart})(Product)