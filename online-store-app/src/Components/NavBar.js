import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    console.log(props)
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand" href="/">OnlineStore</a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/cart" className="nav-link" > Cart </Link>
                </li>
            
            
            </ul>
        </div>
        </nav>
    )
}



export default NavBar