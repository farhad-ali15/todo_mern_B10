import express from "express";
import {
    loginUser,createUser,logoutUser
  } from '../controllers/authController.js'

  

const authRouter = express.Router()


authRouter.route('/new-user').post(createUser)
authRouter.route('/login').post(loginUser)
authRouter.route('/logout').get(logoutUser)



export default authRouter