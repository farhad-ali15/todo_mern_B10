import express from "express";
import {
    createTodo,getAllTodos,updateTodo,deleteTodo,getTodoById
  } from '../controllers/todoController.js';
  
  import  {isAuthorizedUser,isAuthenticatedUser}  from "../middlewares/authHandler.js";
  

const todoRouter = express.Router();


todoRouter.route('/todo/new-todo/').post(isAuthenticatedUser,createTodo);
todoRouter.route('/todos').get(isAuthenticatedUser, isAuthorizedUser("user", "students", "admin", "teacher"),getAllTodos);
todoRouter.route('/todo/:id').get(isAuthenticatedUser, isAuthorizedUser("user", "students", "admin", "teacher"),getTodoById);
todoRouter.route('/update-todo/:id').put(isAuthenticatedUser, isAuthorizedUser( "admin"), updateTodo);
todoRouter.route('/delete-todo/:id').delete(isAuthenticatedUser, isAuthorizedUser( "admin"), deleteTodo);


export default todoRouter