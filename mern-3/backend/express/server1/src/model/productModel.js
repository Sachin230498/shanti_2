import mongoose from "mongoose";



const ProductScema = new mongoose.Schema({
    ProductName:{
        type:String,
  
    },
  
});

export const product  = mongoose.model("product",ProductScema )


