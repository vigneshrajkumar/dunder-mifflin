var mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    id: { type: String, required: true },
    review_by: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: String, required: true }
})

const productSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: {type: String, required: true},
    brand: { type: String, required: true },
    product_image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    categories: [String],
    reviews: [reviewSchema],
})

module.exports = mongoose.model("Product", productSchema)