import mongoose from "mongoose";
const dietSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50,
        minLength: 1,
        trim: true,
        lowercase: true
    },
    description:{
        type: String,
        required: true,
        lowercase: true
    }
},{timestamps:true})

export default mongoose.model("diet", dietSchema)