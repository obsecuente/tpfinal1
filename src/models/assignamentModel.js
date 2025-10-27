import mongoose from "mongoose";

const assignamentModel = new mongoose.Schema({
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
},
    welfare:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "welfare",
        required: "true"
},
    status:{
        type: String,
        enum: ["active","paused","finished"],
        default: "active"
},
    startDate:{
        type:Date,
        default: Date.now
}
},{timestamps:true})

export default mongoose.model("assignament", assignamentModel)