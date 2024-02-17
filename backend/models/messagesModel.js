 
const mongoose = require("mongoose");





const messagesSchema = new mongoose.Schema({
   
    chatRoomId:{
 
        type:String

    },

    senderId:{

        type:String,

    },

    text:{

     type:String,

    }


}, {timestamps:true})





const messagesModel = new mongoose.model("normalmessages", messagesSchema)



module.exports = messagesModel 


