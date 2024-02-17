

const mongoose = require("mongoose");




const chatRoomSchema = new mongoose.Schema({


   members:{type:Array}


},{timestamps:true});




const chatRoomModel = new mongoose.model("normalchatRoom", chatRoomSchema);




module.exports = chatRoomModel;






