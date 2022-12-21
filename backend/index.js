import express from "express";
import bodyParser from 'body-Parser'

import todoRouter from "./routes/todoRoutes.js";
import  {config}  from "./config/dbConnection.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
import cors from 'cors'

const app = express()
app.use(cors({origin:'http://localhost:3000'}))
const PORT = 8000
config()

app.use(bodyParser.json())  // Global middleware
app.use('/', todoRouter)

app.use(errorHandler)
    




app.listen(PORT,()=>{
    console.log(`this is frontend at port ${PORT}`)
})