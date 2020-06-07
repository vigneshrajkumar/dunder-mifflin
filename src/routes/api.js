var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
const Store = require('../models/store');
const Product = require('../models/product');

router.get('/ping', function (req, res, next) {
  res.send({
    staus: "success",
    value: "pong"
  });
});

router.post("/store", function (req, res, next) {
  const storeObj = new Store({
    id: uuidv4(),
    name: req.body.name,
    owner_id: req.body.owner_id,
    location: req.body.location,
    rating: req.body.rating
  })

  Store.findOne({ 'name': storeObj.name }, (err, store) => {
    if (err) {
      return err;
    }
      storeObj.save((err) => {
        if (err) {
          return err;
      };
      return res.status(200).send({ status: "success", message: 'Store created' })
      });
  })
})

router.post("/product", function (req, res, next) {
  const productObj = new Product({
    id: uuidv4(),
    name: req.body.name,
    brand: req.body.brand,
    product_image: req.body.product_image,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    categories: req.body.categories,
    reviews: req.body.reviews
  })

  Product.findOne({ 'name': productObj.name }, (err, product) => {
    if (err) {
      return err;
    }
    productObj.save((err) => {
        if (err) {
          return err;
      };
      return res.status(200).send({ status: "success", message: 'Product created' })
      });
  })
})


module.exports = router;