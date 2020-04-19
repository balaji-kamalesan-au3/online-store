const router = require("express").Router();


const registerUser = require("../../modules/registrationModule");
const loginUser = require("../../modules/loginModule");


router.post("/register",registerUser)
router.post("/login",loginUser)

module.exports = router
