const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/keys").secret;
const User = require("../models/user")


const validateLoginInput = require("../validation/validateLogin");

const loginUser = (req,res) => {
    const { errors, isValid } = validateLoginInput(req.body);
            console.log(isValid)
            if (!isValid) {
            return res.status(400).json(errors);
            }
            const email = req.body.email;
            const password = req.body.password;
       
            User.findOne({ email }).then(user => {

            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
       
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {

                const payload = {
                    id: user.id,
                    name: user.name,
                    
                };
        
                jwt.sign(
                    payload,
                    secret,
                    {
                    expiresIn: 3155692
                    },
                    (err, token) => {
                    console.log(token)
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                    }
                );
                } 
                else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
                }
            });
            });
}

module.exports = loginUser;
        