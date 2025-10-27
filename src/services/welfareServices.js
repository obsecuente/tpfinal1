import welfare from "../models/welfareModel.js"

const createWelfareService = async (welfareData) => {
    const normalizedName = welfareData.name.toLowerCase().trim();
    const existingWelfare = await welfare.findOne({ name: normalizedName });
    if (existingWelfare) {
        throw new Error("A welfare with this same title already exists");
    }
    const newWelfare = new welfare({...welfareData,name: normalizedName});
    const savedWelfare = await newWelfare.save();
    return await welfare.findById(savedWelfare._id)
    .populate("objetive", "name -_id")
    .populate("routines", "title -_id")
    .populate("diets", "title -_id");
};

const getWelfareService = async () =>{
    const getWelfare = await welfare.find()
    .find()
    .populate("objetive","name -_id") //* el -_id hace que se reste por así decirlo el id y queda la consola mostrando solo el name
    .populate("routines","title -_id")
    .populate("diets","title -_id")
    if (!getWelfare.length) {
        throw new Error("no welfare found");
    }

    return getWelfare
   
}
const deleteWelfareService = async(welfareId) =>{
    const deleteWelfare = await welfare.findById({_id: welfareId})
    if(!deleteWelfare){
        throw new Error ("welfare not found")
    }
    await welfare.findByIdAndDelete(welfareId)
    return {message: "welfare deleted succesfully"}

}
const updateWelfareService = async(welfareId,updateData) =>{
    const welfareExists = await welfare.findById(welfareId)
    if(!welfareExists){
        const error = new Error("welfare not found")
        error.statusCode = 404
        throw error
    }
    const updatedWelfare = await welfare.findByIdAndUpdate(welfareId,updateData, {new:true})
    return updatedWelfare
}
export{createWelfareService,getWelfareService,deleteWelfareService,updateWelfareService }