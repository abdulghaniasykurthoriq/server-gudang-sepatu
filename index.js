import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js';
import userRoute from './routes/user.js';
import cors from "cors";
import multer from 'multer';


const PORT = process.env.PORT || 3000

const app = express();

mongoose.connect("mongodb+srv://agat:agat123@cluster0.exyt3.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
)




const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))


const Storage = multer.diskStorage({
    destination:'uploads',
    filename : (req,file,cb)=>{
        cb(null, Date.now()+"_"+file.originalname)
    }
});
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' ){
        cb(null,true)
    }else{
        cb(null,false)
    }
}


const upload = multer({
    storage:Storage,
    fileFilter:fileFilter
}).single('image')


app.use(upload)
app.use('/uploads',express.static('uploads'))
app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})



app.use(cors());
app.use(express.json());
app.use('/api',route);
app.use('/api',userRoute);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})