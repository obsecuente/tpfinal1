import { createDietService } from "../services/dietService.js"

const createDiet = async(req,res) =>{
    try {
        const dietData = req.body
        if(!dietData.title || !dietData.description){
            return res.status(400).json({message:"title and description are required"})
        }
        const savedDiet = await createDietService(dietData)
        return res.status(201).json({message:"new Diet created",data:savedDiet})
    } catch (error) {
        return res.status(500).json({message:"internal server error",error: error.message})
    }
}

export{createDiet}