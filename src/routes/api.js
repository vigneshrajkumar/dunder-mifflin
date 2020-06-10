var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
const Store = require('../models/store');
const Product = require('../models/product');
const Category = require('../models/category');

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

router.get("/store/:name", function (req, res, next) {
   Store.findOne({ 'name': req.param.name }, (err, store) => {
    if (err) {
      return res.status(500).send({ status: "success", message: err.message});
    }
    return res.status(500).send({ status: "success", message: store});
    
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
        return res.status(500).send({ status: "failure", message: err.message });
      };
      return res.status(200).send({ status: "success", message: 'Product created' })
    });
  })
})

router.get("/product/:name", function (req, res, next) {
  Product.findOne({ 'name': req.param.name }, (err, product) => {
    if (err) {
      return err;
    }
    return res.status(500).send({ status: "success", message: product});
  })
})


router.get("/category/populate", function (req, res, next) {
  const categories = new Category({
    categories: ["Electronics", "Books"]
  });
  categories.save(err => {
    if(err) {
      return res.status(500).send({ status: "failure", message: err.message });
    };
    return res.status(200).send({ status: "success", message: 'Categories created' })
  });
})

router.get("/category", function (req, res, next) {
 Category.find((err, categories) => {
    if(err){
      return res.status(500).send({ status: "failure", message: err.message });
    }
    return res.status(200).send({ status: "failure", message: categories.categories });
  })
})

module.exports = router;