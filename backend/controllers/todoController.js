import { todos } from "../model/todoSchema.js"

export const createTodo = async (req, res , next) => {
  
try{
  await todos.create(req.body);

  res.json(req.body)

}catch(err){
  next(err)

}


 

}
export const getAllTodos = async (req, res , next) => {

   const allTodos = await todos.find();
  res.json(allTodos)

}

export const updateTodo = async (req, res, next) => {
  const {id} = req.params
const todo = await todos.findByIdAndUpdate(id,req.body)
  res.send(todo)

}

export const getTodoById = async (req, res, next) => {
  const {id} = req.params
  const todo = await todos.findById(id)


  res.send(todo)

}

export const deleteTodo = async (req, res, next) => {
  try{
    const {id} = req.params
  await todos.findByIdAndDelete(id);

  res.send("todo deleted")

  }catch(err){
    next(err)
  }
}
