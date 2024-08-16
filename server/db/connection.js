import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async() => {
    try{
        const connectionInstance = mongoose.connect(`${process.env.MONGO_URI}/${ DB_NAME }`);
        console.log(`Mongo DB connected! DB Host: ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log("MongoDB connection error!", err);
        process.exit(1);
    }
}

export default connectDB;