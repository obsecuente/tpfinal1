import mongoose from "mongoose";

const welfareSchema = new mongoose.Schema({
name: { 
    type:String,
    required:true,
    trim:true,
    unique:true
},
objetive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "objetive",
    required:true,
    unique:true
},
routines: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "routine",
    required: true,
    default:[], //* tiene la opcion que las routines y las diets vayan vacias por array
    unique:true 
        
}],
diets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "diet",
    required: true,
    default:[],
    unique:true
} ]  
},{timestamps:true})

export default mongoose.model("welfare", welfareSchema)