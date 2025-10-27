
import { updateStudentService } from "../services/studentService.js"
import { createWelfareService, deleteWelfareService, getWelfareService, updateWelfareService } from "../services/welfareServices.js"

const createWelfare = async (req,res) =>{
    try {
        const welfareData = await createWelfareService(req.body)
        return res.status(200).json(welfareData)
    } catch (error) {
        return res.status(500).json({message:"internal server error", error: error.message})
    }
}
const getWelfare = async (req,res) =>{
    try {
        const welfare = await getWelfareService()
        res.status(200).json(welfare)
    } catch (error) {
        if(error.statusCode){
            return res.status(error.statusCode),json({message:error.message})
        }
        return res.status(500).json({message:"internal server error", error: error.message})
    }
}
const deleteWelfare = async(req,res) =>{
    try {
        const welfareId = req.params.id
        const result = await deleteWelfareService(welfareId)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message:error.message})
        }
        return res.status(500).json({message:"internal server error", error:error.message})
    }
}
const updateWelfare = async (req,res) => {
    try {
        const welfareId = req.params.id
        const updateData= req.body 
        const result = await updateWelfareService(welfareId,updateData)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 400){
            return res.status(error.statusCode).json({message:error.message})
        }
        return res.status(500).json({message:"internal server error",error:error.message})
    }
}
export{createWelfare, getWelfare,deleteWelfare,updateWelfare}