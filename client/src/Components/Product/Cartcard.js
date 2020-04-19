import React from 'react'

const Cartcard = (props) => {
    return(
        <div className="card col-lg-3 ">
            <img src = {props.Image} alt={`${props.Name} Image`} width="300px" height="300px" />
            <div className = "card-body container-fluid">
                <h5 className = "card-title">{props.Name} <span><h6> Price  - {props.Price}</h6></span> </h5>
                    <span>
                    <p>Quantity - {props.quantity}</p>
                    <button className="btn btn-light" onClick={props.onClick} >Add Quantity</button>
                    </span>
                <span className="row">
                    
                </span>
            </div>

        </div>
    )
}

export default Cartcard