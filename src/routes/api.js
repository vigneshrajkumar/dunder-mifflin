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
      return res.status(500).send({ status: "error", message: err.message });
    }
    return res.status(500).send({ status: "success", message: store });

  })
})

router.post("/stores/:sid/products/:pid", function (req, res, next) {


  storeID = "-1" /* TODO: Get StoreID froms session information */

  const productObj = new Product({
    _id: uuidv4(),
    name: req.body.name,
    brand: req.body.brand,
    product_image: "req.body.product_image",
    price: req.body.price,
    // description: "req.body.description",
    quantity: req.body.quantity,
    categories: req.body.categories,
    reviews: req.body.reviews,
    storeID: -2
  })

  productObj.save(function (err) {
    if (err) return res.status(500).send({ status: "error", message: err.message });
  }).then(() => {
    return res.status(201).send({ status: "success", product: productObj });
  }).catch(err => {
    console.log(err)
  })
});



router.get("/product/:name", function (req, res, next) {
  Product.findOne({ 'name': req.param.name }, (err, product) => {
    if (err) {
      return err;
    }
    return res.status(500).send({ status: "success", message: product });
  })
})


// router.get("/category/populate", function (req, res, next) {
//   const categories = new Category({
//     categories: ["Electronics", "Books"]
//   });
//   categories.save(err => {
//     if (err) {
//       return res.status(500).send({ status: "failure", message: err.message });
//     };
//     return res.status(200).send({ status: "success", message: 'Categories created' })
//   });
// })

router.get("/categories", async function (req, res) {
  Category.find({}).exec((err, cats) => {
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: cats });
  });
})

module.exports = router;