import mongoose from "mongoose";
 
const User = new mongoose.Schema({
  fullName: {
    type: String,
    // required: [true, "fullname not provided "],
  },
  email: {
    type: String,
    required:true
    // unique: [true, "email already exists in database!"],
    // lowercase: true,
    // trim: true,
    // required: [true, "email not provided"],
    // validate: {
    //   validator: function (v) {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    //   },
    //   message: '{VALUE} is not a valid email!'
    // }

  },
  role: {
    type: String,
    // enum: ["normal", "admin"],
    // required: [true, "Please specify user role"]
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', User);