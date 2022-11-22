import mongoose from "mongoose";

const Sepatu = mongoose.Schema({
    nama:{
        type: String,
        required : true
    },
    warna:{
        type: String,
        // required : false
    },
    ukuran:{
        type: Number,
        // required : false
    },
    bahan:{
        type: String,
        // required : false
    },
    jenis:{
        type: String,
        // required : false
    },
    stock:{
        type: Number,
        required : false
    },
    image:{
        type:String
    }
});


export default mongoose.model('Sepatus', Sepatu);






