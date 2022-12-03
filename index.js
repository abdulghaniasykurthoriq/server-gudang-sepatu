import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js';
import userRoute from './routes/user.js';
import historyRoute from './routes/history.js';
import cors from "cors";
import multer from 'multer';


const PORT = process.env.PORT || 3001

const app = express();

mongoose.connect("mongodb+srv://agat:agat123@cluster0.exyt3.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
)




const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))




app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})



app.use(cors());
app.use(express.json());
app.use('/api',route);
app.use('/api', historyRoute);
app.use('/api',userRoute);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})