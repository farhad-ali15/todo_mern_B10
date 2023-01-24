import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
      type:String,
      required:[true,"please provide the title"],
      minLength:[3, "{VALUE} is not a valid title"],
      unique:[true, "{VALUE} is already in use"]

    },
    body:{
      type:String,
      required:[true,"please provide the description"],
      minLength:[5, "{VALUE} is not a valid description"]

    },
    status:{
      type:Boolean,
      required:[true,"please provide true or false"]
    }

  });

 export const Todos = mongoose.model('todo',todoSchema)