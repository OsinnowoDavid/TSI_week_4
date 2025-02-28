import express from "express"
import cors from "cors"
import authRoutes from "./routes/authroutes.js"
import connectdb from "./config/mongodb.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import courseRoutes from "./routes/courseroutes.js"
import aggregateRoutes from "./routes/aggregate-routes.js"
dotenv.config()
export const app = express()
const port = process.env.PORT
app.use(cors())
app.use(bodyParser.json())
connectdb()
app.use("/api",authRoutes)
app.use("/api",courseRoutes)
app.use("/api",aggregateRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to e-learning")
})

app.listen( port,() =>{
    console.log("e-learning server is running ")
})