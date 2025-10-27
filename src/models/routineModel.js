import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
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
    },
    level:{
        type: String,
        enum:["beginner", "intermediate", "advanced"],
        default: "beginner"
    },
    exercises:[
        {
            name: { type: String, required: true },
            sets: { type: Number, required: true },
            reps: { type: Number, required: true }
        }
    ]
},{timestamps:true})

export default mongoose.model("routine", routineSchema)