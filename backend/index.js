require('dotenv').config({path:"./.env"});
const express = require("express");
const connectToMongoDB = require("./connection/connectToDB")
const userRouter = require("./routes/user.router")
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);


const PORT = process.env.PORT || 8000;

connectToMongoDB(process.env.MONGO_URI);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)


io.on("connection",(socket)=>{
    console.log(`A user connected via Socket.IO ${socket.id}`);
})

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
    
})