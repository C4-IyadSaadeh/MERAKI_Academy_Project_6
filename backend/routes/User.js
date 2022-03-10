const express = require('express');
const UserRouter= express.Router();
const {
    CreateNewUser,
    getAllUser,
    updateUserById,
    deleteUserById,
  }=require('../controllers/User');
  const {
  
    loginUser
  }= require('../controllers/Login')
  UserRouter.post('/createUser',CreateNewUser);
UserRouter.post('/loginUser',loginUser);
  UserRouter.get('/all',getAllUser);
  UserRouter.put('/updateUserById',updateUserById);
  UserRouter.delete('/deleteUserById',deleteUserById);
module.exports =UserRouter;