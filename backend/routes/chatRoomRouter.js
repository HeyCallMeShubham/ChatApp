
const express = require("express");
const { createUser } = require("../controllers/userControllers");
const { createChatRoom, getChatRoom } = require("../controllers/chatController");


const chatRoomRouter = express.Router()


chatRoomRouter.post('/', createChatRoom);

chatRoomRouter.post('/getuserschatroom/:firstId/:secondId', getChatRoom);






module.exports = chatRoomRouter



