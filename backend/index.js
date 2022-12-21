import express from "express";
import bodyParser from 'body-Parser'

import todoRouter from "./routes/todoRoutes.js";
import  {config}  from "./config/dbConnection.js";
import { errorHandler } from "./middlewares/errorHandlers.js";

const app = express()
const PORT = 8000
config()

app.use(bodyParser.json())  // Global middleware
app.use('/', todoRouter)

app.use(errorHandler)
    




app.listen(PORT,()=>{
    console.log(`this is frontend at port ${PORT}`)
})