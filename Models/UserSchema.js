const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:String,
    role:{
        type: String,
        default: "user"
    },
});
module.exports = mongoose.model("User", userSchema);