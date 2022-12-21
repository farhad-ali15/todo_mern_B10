
import { useState,useEffect } from 'react';
import './App.css';
import TodoList from './pages/TodoList';
function App() {

  const [todos,setTodos]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/v1/todos')
    .then((res)=>res.json())
    .then((data)=>setTodos(data))

},[])
  return (
    <div className="App">
     <TodoList todos={todos}/>
    </div>
  );
}

export default App;
