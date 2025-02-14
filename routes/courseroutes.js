import express from "express"
import { addcourse, updatecourse, deletecourse, getcourses } from "../controllers/coursecontroller.js"
const courseroutes = express.Router()
courseroutes.post("/addcourse", addcourse)
courseroutes.get("/getcourse", getcourses)
courseroutes.delete("/deletecourse/:id", deletecourse)
courseroutes.put("/update/:id", updatecourse)

export default courseroutes