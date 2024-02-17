const messagesModel = require("../models/messagesModel")






const addMessage = async(req, res) =>{


 
    try{

     const {chatRoomId, senderId, text} = req.body.msgData


     const message = new messagesModel({

      chatRoomId,
      senderId,
      text

     });

     

     const result = await message.save();

     res.status(200).json(result);

    }catch(err){

    console.log(err, 'errr')

    }



}





const fetchConversations = async(req, res) =>{

    console.log(req.params)


    try{




     const conversation = await messagesModel.find({chatRoomId:req.params.chatroomid});

     

     res.status(200).json(conversation);

    }catch(err){

    console.log(err, 'errr')

    }



}







module.exports = {

   addMessage,
   fetchConversations

}








