
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const userRouter = require("./routes/userRouter");
const chatRoomRouter = require("./routes/chatRoomRouter");
const messageRouter = require("./routes/messageRouter");
const messagesModel = require("./models/messagesModel");


const app = express();



mongoose.connect("mongodb+srv://shubham:mylife@cluster0.natwega.mongodb.net/")



app.use(cors({
    
    origin:"http://localhost:3000",
    methods:['GET', "POST", "PUT", "DELETE"],
    credentials:true
    
}));



app.use(bodyParser.json());

app.use(cookieParser());

app.use('/', userRouter);
app.use('/chatroom', chatRoomRouter);
app.use('/message', messageRouter)

app.use(bodyParser.urlencoded({extended:true}));


const expresServer = app.listen(process.env.HOST, 
    
  console.log(`port is listening on ${process.env.HOST}`)

);










const io = new Server(expresServer,{

cors:{

  origin:"http://localhost:3000"

}


})



const activeUsers = []



io.on("connection", (socket) =>{



  socket.on('join', (data) =>{

     console.log(data, 'join');


     if(!activeUsers.some((user) => user.userId === data._id)){

      activeUsers.push({
    
        userId:data._id,
        socketId:socket.id

      });

};



console.log(activeUsers, 'active users');

io.emit("get-users", activeUsers);


})




    
  socket.on('send-message', async(data) =>{

    const message = new messagesModel(data);

    if(message){

      message.save().then(() =>{
  
        io.to(data.chatRoomId).emit('newmessage', message)

      }).catch(err =>{
    
        console.log(err)

      })
    
    }
   

  })









  socket.on("disconnect", () =>{

    console.log("a user disconnected")

 /// activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)

   /// io.emit('get-users', activeUsers)

});



});













