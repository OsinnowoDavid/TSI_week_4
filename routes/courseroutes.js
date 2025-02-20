import express from "express"
import authorizationRole from "../middlewear/rolebaseauth.js"
import { addcourse, updatecourse, deletecourse, getcourses ,enroll_course} from "../controllers/coursecontroller.js"
const courseroutes = express.Router()
courseroutes.post("/addcourse",authorizationRole("instructor"), addcourse)
courseroutes.get("/getcourse",authorizationRole('student'), getcourses)
courseroutes.delete("/deletecourse/:id", authorizationRole("instructor"),deletecourse)
courseroutes.put("/update/:id",authorizationRole("instructor"), updatecourse)
courseroutes.post("/enroll",authorizationRole("student"), enroll_course)

export default courseroutes