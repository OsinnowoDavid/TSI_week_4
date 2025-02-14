import courseModel from "../models/courseSchema.js";
const addcourse = async (req, res) => {
    try {
        const { coursename, coursetitle, courseduration, courseprice, courseinstructor } = req.body;

        if (!coursename || !coursetitle || !courseduration || !courseprice || !courseinstructor) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const course = { courseduration, courseprice, courseinstructor, coursename, coursetitle };

        const newcourse = new courseModel(course);
        await newcourse.save();
        res.status(201).json({ message: "Course added successfully" }); // Added success response
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
export { addcourse, updatecourse, deletecourse, getcourses };
