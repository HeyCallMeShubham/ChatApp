const chatRoomModel = require("../models/chatRoomModel")




const createChatRoom = async(req, res) =>{

    try{


    const newChat = new chatRoomModel({
          
       members:[req.body.senderId, req.body.recieverId]

    })


     const result = await newChat.save();


     res.status(200).json(result);

     
    }catch(err){
    
        console.log(err)

    }

}



const getChatRoom = async(req, res) =>{

    try{
 
        const chatRoom = await chatRoomModel.findOne({
            
            members:{$all:[req.params.firstId, req.params.secondId]}
        
        })
        
        
        if(chatRoom) return res.status(200).json(chatRoom);
        
        
        const chatRoomCreated = await chatRoomModel.create({
            
            members:[req.params.firstId, req.params.secondId]
        
        });

        res.status(200).json(chatRoomCreated);


    }catch(err){

     
        console.log(err)


    }


}






module.exports = {

   createChatRoom,
   getChatRoom


}





