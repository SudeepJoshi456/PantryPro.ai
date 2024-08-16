import express from "express";
import cors from "cors";
import connectDB from "./db/connection";


const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//db connection
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server running in port:  ${process.env.PORT}`)
    })
    app.on("error", error) {
        console.log("server listen error: ", error);
        throw error;
    }
})
.catch(error){
    console.log("db connection error: ", error);
}



