var mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
       _id: { type: String },
       content: { type: String },
})

module.exports = mongoose.model("Category", categorySchema)