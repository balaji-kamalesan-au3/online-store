const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/keys").secret;
const User = require("../models/user")

const validateRegistrationInputs = require("../validation/validateRegistration");

const registerUser = (request, response) => {
        const {errors, isValid} = validateRegistrationInputs(request.body);

        if(!isValid){
          
            return response.status(400).json(errors);

        }
        else {
           
            User.findOne({email : request.body.email})
            .then(user => {
                if(user) {
                   
                   return response.status(400).json({email : "Email already exists"});
                }
                else {
            
                    const newUser = new User({
                        name: request.body.name,
                        email: request.body.email,
                        password: request.body.password
                        });
                        console.log(newUser)
                        bcrypt.hash(newUser.password, 10)
                          .then((hash) => {
                              newUser.password = hash;
                              newUser.save()
                                     .then(user => response.json(user))
                                     .catch(err => console.log(err))
                            })
                            .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err))
        }
       
}

module.exports = registerUser