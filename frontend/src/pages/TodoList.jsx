import React from 'react'

function TodoList({todos}) {

    
  return (
    <div>
        <ul>
            {
            todos.map(todo=>{
                return(
                    <li key = {todo._id}>
                        <h4>{todo.title}</h4>
                        <p>{todo.body}</p>
                        <p>{todo._id}</p>
                    </li>
            )

            })
}
        </ul>
    </div>
  )
}

export default TodoList