import React from 'react'

const ProductCard = (props) => {
    return(
        <div className="card col-lg-3 ">
            <img src = {props.Image} alt={`${props.Name} Image`} width="300px" height="300px" />
            <div className = "card-body container-fluid">
            <h5 className = "card-title">{props.Name}</h5>
            <h6>Price : {props.Price}</h6>
                <span className="row">
                    <button className="btn btn-primary col-sm-6" onClick={props.onView}>View </button>
                    <button className="btn btn-warning col-sm-6" onClick={props.onClick} >Add to Cart</button>
                </span>
            </div>

        </div>
    )
}

export default ProductCard