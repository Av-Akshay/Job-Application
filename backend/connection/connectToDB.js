const mongoose = require("mongoose");

const connectToMongoDB = async (url)=>{
    try {
        const connection = await mongoose.connect(`${url}`);
        const {host,port,name} = connection.connection;
        console.log(`${name}, ${host},${port}`);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connectToMongoDB;