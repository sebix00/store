var express = require("express");
var router = express.Router();
const path = require("path");
const request = require("request");

const productActions = require("../actions/productActions");
const orderActions = require("../actions/orderActions");

// PRODUCT
//get all product
router.get("/products", productActions.getAllProduct);
// save product
router.post("/products", productActions.saveProduct);

//ORDER

router.post("/order",orderActions.saveOrder)


module.exports = router;
