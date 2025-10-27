import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import {studentEmail, studentPass} from "../utils/validator.js"

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength: 30,
        minLength: 1,
        trim: true,
        lowercase: true
    },
    lastName:{
        type: String,
        required: true,
        maxLength: 30,
        minLength: 1,
        trim: true,
        lowercase: true
    },
    age:{
        type: Number,
        required: true,
        min: 12,
        max: 90
    },
    gender:{
        type: String,
        enum: ["masculino","femenino"],
        required: [true,"you must select a valid gender"]
    },
    email:{
        type: String,
        required: true,
        maxLength: 30,
        minLength: 3,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
        validator: studentEmail,
        message: "your email does not meet the requirements",}
    },
    password:{
        required: true,
        type: String,
        validate: {
        validator: studentPass,
        message:"password must be bewteen 6 and 12 characters, with at least one number, one uppercase letter and one lowercase letter"}
    },
    currentObjetive:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "objetive",
        required : true}
    },{timestamps:true})

studentSchema.pre("save", function(next){               //*  middleware para hashear password
    this.password = bcrypt.hashSync(this.password,10)
    next()    
})
export default mongoose.model("student", studentSchema)
