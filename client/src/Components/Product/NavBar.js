import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {logoutUser} from "../../Redux/actions/authActions"

const NavBar = (props) => {
    console.log(props)
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">OnlineStore</Link>
        
        <div id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/cart" className="nav-link" > Cart </Link>
                </li>
            
                <li className="nav-item">
                    <Link to="/product" className="nav-link" > Products </Link>
                </li>
                <li>
                    <button className="nav-link" style={{backgroundColor:"transparent",border: "none"}}onClick={() =>props.logoutUser(props.history)} >Logout</button>
                </li>
            </ul>
        </div>
        </nav>
    )
}



export default connect(null,{logoutUser})(NavBar)