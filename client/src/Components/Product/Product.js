import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import NavBar from './NavBar'


 

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

  
  
 

    render(){
        console.log(this.props)
        if(this.state.laptops !== null) {
            return (
                <Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            {/* {this.state.laptops.map(
                                (product) => <ProductCard 
                                key = {product.pid} {...product} 
                                onClick = {() => this.props.addtoCart(product)} 
                                onView = {() =>{this.props.viewProduct(product); this.props.history.push("/productdetails")}}/>
                            )} */}
                            Product Page
                        </div>
                    </div> 

                </Fragment>    
            )

            
        }
        else {
           return (
             <div> 
                 <NavBar />
                 Loading... 
            </div>
           )
        }

       
    }

}

const mapStatetoProps = state => ({
    state
})


export default  connect(mapStatetoProps)(Product)