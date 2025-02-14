import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const connectdb = async () => {
    try {
        mongoose.connection.on("error", (err) => {
            console.error("DB connection error:", err);
        });

        const uri = `${process.env.MONGODB_URI}/special-man`;
        await mongoose.connect(uri);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the application on connection error
    }
};

export default connectdb;