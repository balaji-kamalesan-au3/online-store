A Small functional e-commerce web app using React 
The goal of the Simple Online Store is to give your users the capability of selecting a product to purchase, viewing purchase information, adding it to an online shopping cart, and finally, actually purchasing the products in the shopping 

Technologies Used:
    1.Front-end =>  React, Redux , Redux Thunk, Axios
    2.Backend => Nodejs, Express, Bcrypt, Jwt, Validator,mongoose
  
 Requirements 
    1.Latest versions of Node and NPM,
    2.MongoDB Installed in local Machine
  
Features:

    Backend:

        => User Authentication through jwt
        => API to Provide products to frontend (If Authenticated)
        => Passwords are hashed using bcrypt
        => validation of data in backend
        => Protected Routes
    
    Frontend:

        => Products can be updated based on Category
        => User can add products to cart and delete from cart, quantites can also be updated
        => Prices will be updated based on the products available in carts
        => Redux thunk are used to dispatch actions
        => Completely Built using react
        => Used sample flipkart dataset
        
Instructions to run the app

    Setup Node (Version) >= 8.10 and npm (Version) >= 5.6 on your machine
        1. Clone the Repository
            To clone run the following command
            git clone https://github.com/balaji-kamalesan-au3/hashtag-assignment.git
        2.Navigate inside the cloned folder
            run the following commands:
                cd server
                npm install
                npm run client-install
        3. Once all the installation are complete
            run the following
                npm run dev

    If you have any problems while installing please reach out to me through +91 8838159833


Created By:
Balaji Kamalesan
email : balajikamalesan96@gmail.com