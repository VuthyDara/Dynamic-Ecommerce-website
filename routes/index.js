const path = require('path');
const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin');
router.get('/', adminController.getHomePage);

router.get("/product", (req, res) => {
    res.render("productPage");
})

router.get("/admin", (req, res) => {
    res.render("adminPanel");
})

router.get("/signin", (req, res) => {
    res.render("signin");
})

router.get("/signup", (req, res) => {
    res.render("signup");
})

router.get("/products", (req, res) => {
    res.render("products");
})

router.get("/user", (req, res) => {
    res.render("user");
})
router.get("/purchaseOrder", (req, res) => {
    res.render("purchaseOrder");
})
router.get("/history", (req, res) => {
    res.render("history");
})
router.get("/admin", (req, res) => {
    res.render("adminPanel");
})

module.exports = router;