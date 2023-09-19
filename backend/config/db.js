const mongoose = require('mongoose')
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/tenantproject")
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

//process.env.MONGO_URI

module.exports = connectDB