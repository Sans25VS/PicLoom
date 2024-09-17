import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));

// Define a simple route
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "I am coming from backend",
        success: true,
    });
});

const port = process.env.PORT || 3000;

// Connect to the database and start the server
const startServer = async () => {
    try {
        await connectDB();  // Wait for DB connection
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);  // Exit process if DB connection fails
    }
};

// Call the function to start the server
startServer();
