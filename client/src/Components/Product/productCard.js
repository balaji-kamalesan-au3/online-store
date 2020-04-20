import React from 'react'


const ProductCard = (props) => {
    return(
        <div className="card col-lg-3">
            {/* <img src = {props.Image} alt={`${props.Name} Image`} width="300px" height="300px" /> */}
            <div className = "card-body container-fluid">
            <h5 className = "card-title">{props.product["product_name"]}</h5>
            <h6>Retail Price : {props.product["retail_price"]}</h6>
            <h6>Discount Price : {props.product["discounted_price"]}</h6>
                <span className="row">
                    <button className="btn btn-warning col-sm-6" onClick={props.onClick} >Add to Cart</button>
                </span>
            </div>

        </div>
    )
}

export default ProductCard