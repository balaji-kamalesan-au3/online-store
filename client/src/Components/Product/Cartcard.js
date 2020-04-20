import React from 'react'

const Cartcard = (props) => {
    return(
        <div className="card col-lg-3 ">
            <img src ="https://storiesflistgv2.azureedge.net/stories/2019/03/article_banner_press_release_26_03_19_v1-01.jpg" alt={`${props.product["product_name"]} Image`} width="300px" />
            <div className = "card-body container-fluid">
                <h5 className = "card-title">{props.product["product_name"]} <span><h6> Price  : {props.product["discounted_price"]}</h6></span> </h5>
                    <span>
                    
                    <p>Total Price : {props.product["discounted_price"]*props.product.quantity}</p>
                    
                   <span><button className=" btn-warning" onClick={props.addCart} >Add Quantity</button>
                   <div>Quantity - {props.product["quantity"]}</div>
                    <button className=" btn-warning" onClick={props.deleteCart}> Delete Quantity</button></span> 
                    </span>
                <span className="row">
                    
                </span>
            </div>

        </div>
    )
}

export default Cartcard