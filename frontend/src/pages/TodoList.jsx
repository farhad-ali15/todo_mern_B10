import React from 'react'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';



function TodoList() {

  
const {data:todos, error, loading} = useFetch("http://localhost:8000/v1/todos")
  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8000/v1/delete-todo/${id}`

      const res = await axios.delete(url);
     
      toast.success(res.data, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
       
       
    } catch (error) {
      console.log({error});
      toast.success(error.message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  return (
    <div>
      <ul className='todoList'>
        {
          todos.map(todo => {
            return (
              <li key={todo._id}>
                <div><h4 style={{ textDecoration: todo.status === 'true' ? 'linethrough' : null }}>{todo.title}</h4>
                  <p>{todo.body}</p>
                </div>

                <div className='control-btns'>
                  <button className='btn btn-success'><i className="bi bi-eye-fill"></i></button>
                  <Link to={`/${todo._id}`} className='btn btn-primary mx-2'><i className="bi bi-pencil-square"></i></Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(todo._id)}><i className="bi bi-trash3"></i></button>
                </div>


              </li>
            )

          })
        }
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ul>
    </div>
  )
}

export default TodoList