var mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
       categories: [{type: String, unique: true}]
})

module.exports = mongoose.model("Category", categorySchema)