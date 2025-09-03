const dotenv = require('dotenv');
const express = require("express");
const connectToMongoDB = require("./connection/connectToDB")
const userRouter = require("./routes/user.router")
const jobRouter = require("./routes/job.router")
const applicationRouter = require("./routes/application.router")
const notificationRouter = require("./routes/notification.router")
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);
dotenv.config();
const PORT = process.env.PORT || 8000;

connectToMongoDB(process.env.MONGO_URI)


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow both common dev ports
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get("/",(req,res)=>{ 
    console.log("get request");
    
    res.send("Hello")
});

app.use( "/api",userRouter)
app.use( "/api/job",jobRouter)
app.use("/api/applyjob",applicationRouter)
app.use("/api/notification",notificationRouter)



io.on("connection",(socket)=>{
    console.log(`A user connected via Socket.IO ${socket.id}`);
})

app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`);
    
})