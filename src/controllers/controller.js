const Product = require("../models/model");

const add = (req, res, next) => {
  if (!req.body) {
    req.status(400).send({
      message: "Should not be empty",
    });
    return;
  }
  const body = req.body;
  const product = new Product(req.body);
  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error while adding item",
      });
    });
};

const find = (req, res, next) => {
  if (req.query.id) {
    const id = req.query.id;

    Product.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found product with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving product with id " + id });
      });
  } else {
    Product.find()
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving product information",
        });
      });
  }
};

module.exports = { add, find }