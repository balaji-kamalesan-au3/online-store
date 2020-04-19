const router = require("express").Router();
const getProduct = require("../../modules/getProduct");

router.get("/getProduct/:key",getProduct);

module.exports = router
