import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import NavBar from './NavBar';
import {getProducts} from "../../Redux/actions/productActions"
import ProductCard from './productCard';


 

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            loading : true
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getProducts(null)
    }

    generateCard = () => {
        {this.props.data.map(
            (product) => {return <ProductCard product={product} />}
        )}
    }
  
    componentDidMount() {
        this.props.getProducts(null);
        if(this.props.products.data){
            this.setState({...this.state,loading : false},() => {console.log(this.props)})
        }
    }

 

    render(){
        console.log(this.props)

        if(this.state.loading){
            return(
                <div>loading</div>
            )
        }
        else {
            return (
                <Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <button className="btn btn-primary" onClick={this.onSubmit}>Get Products</button>
                            {this.generateCard()}
                        </div>
                    </div> 

                </Fragment>    
            )
        }
            
    }

}

const mapStatetoProps = state => ({
    errors : state.errors,
    products : state.products
})


export default  connect(mapStatetoProps,{getProducts})(Product)