import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    role:{  type: String, enum: ["instructor", "student"], type: String, }
})

const userModel= mongoose.model.users || mongoose.model("users", userSchema)

export default userModel