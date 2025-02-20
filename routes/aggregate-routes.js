import express from "express"
import { getstats } from "../controllers/aggregate.js"
const aggregateRoutes = express.Router()

aggregateRoutes.get("/getaggregate", getstats)

export default aggregateRoutes