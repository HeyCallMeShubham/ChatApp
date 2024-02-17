
const mongoose = require("mongoose");





const userSchema = new mongoose.Schema({


    userName:{type:String, required:true},
    email:String,
    userPhoneNumber:Number,
    password:String


}) 





const userModel = new mongoose.model("normalchatuser", userSchema)



module.exports = userModel




