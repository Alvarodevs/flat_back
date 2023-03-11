const Product = require("../models/model");

const add = async (req, res, next) => {
  if (!req.body) {
    req.status(400).send({
      message: "Should not be empty",
    });
    return;
  }

  const { name, description, image, isFavourite, price, section } = req.body;
  const product = new Product({
    name,
    description,
    image,
    isFavourite,
    price,
    section,
  });
  
  try {
    const newProduct = await product.save()
    return res.status(201).json({
      data: true,
      message: 'Added new product',
      newProduct,
    });
  } catch(error) {
    return res.status(500).send({
      data: true,
      message: `Error while adding item: ${error.message}`,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(201).json({
      data: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      data: false,
      msg: `Please contact the administrator ${error.message}`,
    });
  }
};

const findByQuery = async (req, res, next) => {
  const { query } = req.query
  if (query) {
    const nameRegex = new RegExp(query, 'i');

    try {
      const result = await Product.find({
        name: nameRegex,
      });
  
      return res.status(201).json({
        data: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        data: false,
        message: `Error ocurred: ${error.message}`,
      });
    }
  };
}

module.exports = { add, getAllProducts, findByQuery }