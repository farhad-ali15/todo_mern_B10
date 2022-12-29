
import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './pages/TodoList';
function App() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/v1/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))

  }, [])
  return (
    <div className="App">

      <p>

        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Add Todo
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Enter Title</label>
            <input type="text" className="form-control" name='title' id="title" placeholder="Your title here" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Enter Description</label>
            <input type="text" className="form-control" id="body" name='body' placeholder="Your description here" />
          </div>
          <div className="mb-3">
          <label htmlFor="body" className="form-label">Status</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Please Select Status</option>
            <option value="true">Read</option>
            <option value="false">Unread</option>
            
          </select>
          </div>
          <div className="mb-3">
            <input type='submit' className="btn btn-success" value="save todo" />
          </div>
        </div>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
