const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");
const upload = require("../controllers/upload");

// Rutas API
router.post(
  "/new_product", 
  upload.uploadImage, 
  controller.add
);
router.get("/products", controller.getAllProducts);
router.get("/search", controller.findByQuery);

module.exports = router;
