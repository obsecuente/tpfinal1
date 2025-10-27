import mongoose from "mongoose"

const objetiveSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique:true,
        default: "weight loss"
    }
},{timestamps:true})
export default mongoose.model("objetive", objetiveSchema)