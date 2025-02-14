import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    coursename:{type:String, require:true},
    coursetitle:{type:String, require:true},
    courseduration:{type:String, require:true},
    courseprice:{type:String, require:true},
    courseinstructor:{type:String, require:true}})
const courseModel= mongoose.model.courses || mongoose.model("courses", courseSchema)
export default courseModel
