import assignament from "../models/assignamentModel.js";

const createAssignamentService = async(assignamentData) => {
    const newAssignament = new assignament(assignamentData)
    const savedAssignament = await newAssignament.save()
    return await assignament.findById(savedAssignament._id)
    .populate({
        path: "student",
        select: "name lastName age gender email -_id",
        populate: { path: "currentObjetive", select: "name -_id" }
    })
    .populate({
        path: "welfare",
        select: "name -_id",
        populate: [
            { path: "objetive", select: "name  -_id" },
            { path: "routines", select: "title description level exercises -_id" },
            { path: "diets",    select: "title description -_id" }
        ]
    });

}
export{createAssignamentService}