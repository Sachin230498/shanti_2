import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./src/config/connectDB.js";
import { User } from "./src/model/userModel.js";
import { product } from "./src/model/productModel.js";

dotenv.config();

const app = express();
app.use(express.json())

ConnectDB()




app.get("/", (req,res)=>{
    res.send("Hello Server")
})


app.post("/", (req,res)=>{
    const data = req.body;

    


})


// Start the server
let PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`server is started on  http://localhost:${PORT}`);
});





// let a = ()=>()=>{
//   console.log("hello")
// }

//  let b = a()

//  b()