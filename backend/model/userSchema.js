import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
      type:String,
      required:[true,"please provide the name"],
      minLength:[3, "{VALUE} is not a valid name"]
      

    },
    userName:{
      type:String,
      required:[true,"please provide the username"],
      minLength:[5, "{VALUE} is not a valid username"],
      unique:[true, "{VALUE} is already in use"],
      minLength:[3, "username must be atleast 3 characters"],
      maxLength:[15, "username must be atmost 15 characters"]

    },
    email:{
      type:String,
      required:[true,"please provide valid email"],
      unique:[true, "{VALUE} is already in use,please provide another email"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      lowercase:[true,'all email should be in lowercase']
    },
    password:{
      type:String,
      required:[true,"please provide password email"],
      minLength:[8, "password must be atleast 8 characters"],
      maxLength:[100, "password must be atmost 16 characters"]
    },
    avatar:{
      type:String,
      
    },
    role:{
      type:String,
      enum:["user", "student","moderator", "admin", "teacher"],
      default:'user'
      
    },
    status:{
      type:String,
      enum:["pending", "enrolled","passout", "dropout"],
      default:'pending'
      
    }

  });

 export const User = mongoose.model('user',userSchema)