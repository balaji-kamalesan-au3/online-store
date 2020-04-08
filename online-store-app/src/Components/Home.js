import React from 'react'
import NavBar from './NavBar'
import Product from './Product'


 class Home extends React.Component{
    
    render(){
        
        return(
            <div> 
                <NavBar />
                <Product />
            </div>
        )
    }
    
}


export default Home