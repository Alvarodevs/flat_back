const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

// Rutas API
router.post("/new_product", controller.add);
router.get("/products", controller.getAllProducts);
router.get("/search", controller.findByQuery);

module.exports = router;
