
const express = require("express");
const { createUser, getUsers } = require("../controllers/userControllers");


const userRouter = express.Router()


userRouter.post("/adduser", createUser);

userRouter.get("/getusers", getUsers);







module.exports = userRouter



