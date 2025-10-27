import { createAssignamentService } from "../services/assignamentService.js";

const createAssignament = async (req,res) =>{
    try {
        const assignamentData = await createAssignamentService(req.body)
        return res.status(200).json(assignamentData)
    } catch (error) {
        return res.status(500).json({message:"internal server error", error:error.message})
    }
}

export{createAssignament}