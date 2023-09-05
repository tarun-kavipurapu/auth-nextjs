import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  password: {
    type: String,
    required: true,
    select:false, //This will never show up in the output
  },
  // You can add more fields as needed for your user data
  isAdmin:{
        type: Boolean,
        default: false,
  },
  isVerified:{
        type: Boolean,
        default: false,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
});

const User = mongoose.models.User|| mongoose.model("User", userSchema);
export default User;