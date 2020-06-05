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


userSchema.methods.userExists = function(user){
    this.findOne({email: user.email}, function(err, usr){
        if (err) return console.log(err);
        return usr.email === user.email
    });
};

module.exports = mongoose.model("User", userSchema)