var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    id: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    sessionKey: { type: String },
    lastLogin: { type: Date },
    isSeller: { type: Boolean },
    contactInfo: {
        phone: { type: String },
        address: { type: String },
        pincode: { type: String },
    },
    // TODO:Vig to be defined
    // transactions: {
    //     product
    // }, 
})

module.exports = mongoose.model("User", userSchema)