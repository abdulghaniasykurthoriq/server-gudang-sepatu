import mongoose from "mongoose";

const History = mongoose.Schema({
    nama:{
        type: String,
        required : true
    },
    sepatu_id:{
        type: String,
        // required : false
    },
    status:{
        type: String,
        // required : false
    },
    dari:{
        type: String,
        // required : false
    },
    untuk:{
        type: String,
        // required : false
    },
    tanggal:{
        type: String
    },
    total_sepatu:{
        type:Number
    }
});


export default mongoose.model('Histories', History);






