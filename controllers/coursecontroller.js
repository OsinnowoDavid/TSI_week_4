import courseModel from "../models/courseSchema.js";
import { validate_course } from "./validator.js";
import transporter from "../config/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();
// Add course
const addcourse = async (req, res) => {
    try {
        const { error, value } = validate_course(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }

        if (value) {
            const { coursename, coursetitle, courseduration, courseprice, courseinstructor ,email} = value;
            const newcourse = new courseModel({ coursename, coursetitle, courseduration, courseprice, courseinstructor });


            await newcourse.save();

            
        const result = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, // Ensure adminEmail is correctly passed here
            subject: "Welcome to E-learning ",
            text: `Welcome to E-learning. Your course has been created with coursename: ${coursename} and coursetitle: ${coursetitle}`,

        });
        
        res.status(200).json({ success: true, message: "Registered successfully" });


           
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const deletecourse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Course id is required" });
        }
        await courseModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}
const getcourses = async (req, res) => {  
    try {
        const courses = await courseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
  }
  const updatecourse = async (req, res) => {    
    try {
        const { id } = req.params;
        const { coursename, coursetitle, courseduration, courseprice, courseinstructor } = req.body;
        if (!id) {
            return res.status(400).json({ message: "Course id is required" });
        }
        const course = { coursename, coursetitle, courseduration, courseprice, courseinstructor };
        await courseModel.findByIdAndUpdate(id, course);
        res.status(200).json({ message: "Course updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
  }

  const enroll_course = async (req, res) => {
    try {
        const { error, value } = validate_course(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }

        if (value) {
            const { coursename, coursetitle, courseduration, courseprice, courseinstructor ,email} = value;
            const newcourse = new courseModel({ coursename, coursetitle, courseduration, courseprice, courseinstructor });


            await newcourse.save();

            
        const result = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email, // Ensure adminEmail is correctly passed here
            subject: "Welcome to E-learning ",
            text: `Welcome to E-learning.you have successfully enroll for a new course  with coursename: ${coursename} and coursetitle: ${coursetitle}`,

        });
        
        res.status(200).json({ success: true, message: "Registered successfully" });


           
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }}
export { addcourse, updatecourse, deletecourse, getcourses ,enroll_course};
