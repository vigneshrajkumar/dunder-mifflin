var mongoose = require("mongoose");
var storeSchema = mongoose.Schema({
    id: { type: String, required: true},
    name: {type: String, required: true},
    owner_id: {type: String, required: true},
    location: {type: Number, required: true},
    rating: {type: Number}
})

module.exports = mongoose.model("Store", storeSchema)