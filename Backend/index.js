import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.length("/", (req, res) => {
    return res.status(200).json({
        message: "I am coming from backend",
        success: true
    })
}
)
// Middlewares 
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const port = 8000;
app.listen(port,()=>{
console.log(`listening on port ${port}`);
});