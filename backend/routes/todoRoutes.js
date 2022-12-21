import express from "express";
import {
    createTodo,getAllTodos,updateTodo,deleteTodo,getTodoById
  } from '../controllers/todoController.js'
  

const todoRouter = express.Router()


todoRouter.route('/v1/todo/new-todo/').post(createTodo)
todoRouter.route('/v1/todos').get(getAllTodos)
todoRouter.route('/v1/todo/:id').get(getTodoById)
todoRouter.route('/v1/update-todo/:id').put(updateTodo)
todoRouter.route('/v1/delete-todo/:id').delete(deleteTodo)


export default todoRouter