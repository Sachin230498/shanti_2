import mongoose from "mongoose"


export const ConnectDB = ()=>{
   let connect =  mongoose.connect(process.env.Mongo);

   if(connect){
    console.log("connect to DB")
   }else{
    console.log("not connected")
   }


}

