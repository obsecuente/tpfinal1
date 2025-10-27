import { createRoutineService } from "../services/routineService.js"

const createRoutine = async(req,res) =>{
    try {
        const routineData = req.body
        if(!routineData.title || !routineData.description){
            return res.status(400).json({message:"title and description are required"})
        }
        const savedRoutine = await createRoutineService(routineData)
        return res.status(201).json({message:"new routine created",data:savedRoutine})
    } catch (error) {
        return res.status(500).json({message:"internal server error",error: error.message})
    }
}

export{createRoutine}