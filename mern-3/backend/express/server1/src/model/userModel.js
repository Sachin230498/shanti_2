import mongoose from "mongoose";



const UserScema = new mongoose.Schema({
    username:{
        type:String,
      
    },
    password:{
        type:String
    }
});

export const User = mongoose.model("user",UserScema )


