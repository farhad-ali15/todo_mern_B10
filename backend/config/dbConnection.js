import mongoose from 'mongoose';

export const config = ()=>{
    mongoose.connect(process.env.DB_URI ,(config)=>{
        console.log(`database is connected ${config}` )
    });
    
}
 