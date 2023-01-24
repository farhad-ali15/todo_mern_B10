import express from "express";
import bodyParser from 'body-Parser'

import todoRouter from "./routes/todoRoutes.js";
import authRouter from "./routes/authRoutes.js";
import  {config}  from "./config/dbConnection.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

dotenv.config()

const app = express()
app.use(cors({origin:'http://localhost:3000'}))

config()

app.use(cookieParser())
app.use(bodyParser.json())  // Global middleware
app.use('/v1', todoRouter)
app.use('/v1/user', authRouter)

app.use(errorHandler)
    




app.listen(process.env.PORT,()=>{
    console.log(`this is frontend at port ${process.env.PORT}`)
})