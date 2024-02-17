
const userModel = require("../models/userModel")



  const createUser = async(req, res) =>{

    try{

     const user = new userModel(req.body);

     const result = await user.save();


    }catch(err){

     console.log(err)
          
    }


  }
   


  const getUsers = async(req, res) =>{

    try{

      const users = await userModel.find({});

      res.status(200).json(users)

    }catch(err){
   
      console.log(err);

    }


  }






   module.exports = {
 
    createUser,
    getUsers

   }

