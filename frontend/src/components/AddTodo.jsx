import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddTodo() {
    const [todo, setTodo] = useState({
        title: '',
        body: '',
        status: false
    })
  

    const { id } = useParams()

    const getDataById= async()=>{
        try {
            await axios.get(`http://localhost:8000/v1/todo/${id}`)
                .then(res => {
                    setTodo({title:res.data.title,body:res.data.body,status:res.data.status})
                });

        } catch (error) {
            console.log(error);
        }

    };
       useEffect(() => {
          if(id)getDataById();        
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/v1/todo/new-todo", todo)
                .then(res => toast.success("todo has created", {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }));

        } catch (error) {
            toast.success(error.response.data.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }

   
    return (
        <div>
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
            <p>

                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Add Todo
                </button>
            </p>
            <div className={id?"collapse show":"collapse"} id="collapseExample">
                <div className="card card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Enter Title</label>
                            <input type="text" className="form-control" onChange={(e) => setTodo({ ...todo, title: e.target.value })} value ={id?todo.title:""} name='title' id="title" placeholder="Your title here" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Enter Description</label>
                            <input type="text" className="form-control" onChange={(e) => setTodo({ ...todo, body: e.target.value })} value ={id?todo.body:""} id="body" name='body' placeholder="Your description here" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Status</label>
                            <select className="form-select" onChange={(e) => setTodo({ ...todo, status: e.target.value })} value ={id?todo.status:""} name='status' aria-label="Default select example">
                                <option defaultValue="selected">Please Select Status</option>
                                <option value="true">Read</option>
                                <option value="false">Unread</option>

                            </select>
                        </div>
                        <div className="mb-3">
                            <input type='submit' className="btn btn-success" value="save todo" />
                        </div></form>
                </div>
            </div>

        </div>

    )

}

export default AddTodo