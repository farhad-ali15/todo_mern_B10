import mongoose from 'mongoose';

export const config = ()=>{
    mongoose.connect('mongodb://localhost:27017/todoDb',(config)=>{
        console.log(`database is connected ${config}` )
    });
    
}
 