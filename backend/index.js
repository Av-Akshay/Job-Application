const express = require("express");
const connectToMongoDB = require("./connection/connectToDB")
const userRouter = require("./routes/user.router")

const app = express();
const PORT = 5000;

connectToMongoDB("mongodb://127.0.0.1:27017/notesApp")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)



app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
    
})