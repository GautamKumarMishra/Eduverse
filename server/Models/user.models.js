import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password :{
        type: String,
        required : true 
    },
    role : {
        type: String,
        enum: ["student", "instructor"],
        default:"student"
    },
    // This is like foreign key we create in SQL
    enrolledCourses :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    photoURL : {
        type : String,
        default : ""
    }
},{timestamps: true});
export const User = mongoose.model("User", UserSchema);
// To register 
// 1) We have to write busisness logic  how any user will register page
// 2) Create API when it hit on that API user may Login