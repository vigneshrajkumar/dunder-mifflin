var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
const Store = require('../models/store');
const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');

router.get('/ping', function (req, res, next) {
  res.send({
    staus: "success",
    value: "pong"
  });
});

router.get("/users/:uid/cart", (req, res, next) => {
  User.findOne({ 'sessionKey': req.cookies['dm-auth'] }, (err, user) => {
    if (err) { next(err) }
    res.json({ status: "success", message: user.cart })
  })
})

router.put("/users/:uid/cart", (req, res, next) => {
  User.findOneAndUpdate({ 'sessionKey': req.cookies['dm-auth'] }, { $push: { 'cart': req.body.product } }, (err, user) => {
    if (err) { next(err) }
    res.json({ status: "success", message: user })
  })
})

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

router.get("/stores/:sid", (req, res, next) => {
  Store.findOne({ '_id': req.params.sid }, (err, store) => {
    if (err) { next(err) }
    return res.json({ store: store });
  })
})

router.post("/stores/:sid/products", async function (req, res, next) {

  storeID = "-1" /* TODO: Get StoreID froms session information */
  const productObj = new Product({
    _id: req.body._id ? req.body._id : uuidv4(),
    name: req.body.name,
    brand: req.body.brand,
    product_image: "req.body.product_image",
    price: req.body.price,
    description: "req.body.description",
    quantity: req.body.quantity,
    categories: req.body.categories,
    reviews: req.body.reviews,
    storeID: storeID
  });

  try {
    const resp = await productObj.save()
    return res.status(201).send({ status: "success", product: resp });
  } catch (err) {
    return res.status(500).send({ status: "error", message: err.message });
  }

});

router.get("/stores/:sid/products/:pid", async function (req, res) {
  try {
    const resp = await Product.findOne({ 'storeID': req.params.sid, '_id': req.params.pid })
    return res.status(200).send({ status: "success", product: resp });
  } catch (err) {
    return res.status(500).send({ status: "error", message: err.message });
  }
})

router.get("/stores/:id/products", async function (req, res) {
  try {
    const resp = await Product.find({ 'storeID': req.params.id })
    return res.status(200).send({ status: "success", products: resp });
  } catch (err) {
    return res.status(500).send({ status: "error", message: err.message });
  }
})

router.get("/product/:name", function (req, res, next) {
  Product.findOne({ 'name': req.params.name }, (err, product) => {
    if (err) {
      return err;
    }
    return res.status(500).send({ status: "success", message: product });
  })
})


router.get("/categories/:cid/products", async function (req, res) {
  Product.find({ categories: { $in: [req.params.cid] } }).exec((err, products) => {
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: products });
  });
})


router.get("/categories", async function (req, res) {
  Category.find({}, {}).exec((err, cats) => {
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: cats });
  });
})


router.get("/categories/:cid", async function (req, res) {
  Category.findOne({ _id: req.params.cid }).exec((err, cat) => {
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: cat });
  });
})

router.post("/stores/:sid/products/:pid/reviews", async function (req, res, next) {
  const filter = { _id: req.params.pid };
  const update = { reviews: req.body.reviews }
  let doc = await Product.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true // Make this update into an upsert
  });
  return res.status(200).send({ status: "success", message: doc })
})


router.get("/search", async (req, res) => {
  Product.find({ "name": { "$regex": req.query.key, "$options": "i" } }).exec((err, products) => {
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: products });
  })
})

module.exports = router;