import React, { Fragment } from 'react'
import NavBar from './NavBar'

const NotFound = () => {
    return(
        <Fragment>
            <NavBar />
            <div >
            <img src ="https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See.png" alt ={`404 Notfound Image`}  className="img-fluid col-lg-8"  />
            </div>
        </Fragment>
        

    )
}

export default NotFound