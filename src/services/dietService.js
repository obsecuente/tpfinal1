import diet from "../models/dietModel.js"

const createDietService = async(dietData) => {
    const newDiet = new diet(dietData)
    console.log(`i have the diet [dietService.js]`)
    const savedDiet = await newDiet.save()
    return savedDiet
}

export{createDietService}