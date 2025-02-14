import express from "express"
import cors from "cors"
import authRoutes from "./routes/authroutes.js"
import connectdb from "./config/mongodb.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import courseRoutes from "./routes/courseroutes.js"
dotenv.config()
const app = express()
const port = process.env.PORT
app.use(cors())
app.use(bodyParser.json())
connectdb()
app.use("/api",authRoutes)
app.use("/api",courseRoutes)


app.listen( port,() =>{
    console.log("e-learning server is running ")
})