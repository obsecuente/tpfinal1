import routine from "../models/routineModel.js"

const createRoutineService = async(routineData) => {
    const routineExists = await routine.findOne({title: routineData.title, level: routineData.level})
    if(routineExists){
    throw new Error(`there is already an existing routine for ${routineData.title} with the ${routineData.level} level`)
    }
    const newRoutine = new routine(routineData)
    console.log(`routine created [routineService.js]`)
    const savedRoutine = await newRoutine.save()
    return savedRoutine
}

export{createRoutineService}