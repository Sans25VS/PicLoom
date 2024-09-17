import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Ensure that MONGODB_URI is correctly set in your environment variables
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with the database");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);  // Exit the process if the DB connection fails
    }
};

export default connectDB;
