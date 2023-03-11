const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  isFavourite: { type: Boolean, required: true },
  price: { type: String, required: true },
  section: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
