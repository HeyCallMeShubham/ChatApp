
const express = require("express");
const { addMessage, fetchConversations } = require("../controllers/messagesController");
 

const messageRouter = express.Router()


messageRouter.post('/addmsg', addMessage);

messageRouter.get('/fetchconversation/:chatroomid', fetchConversations);
 




module.exports =  messageRouter