import objetive from "../models/objetiveModel.js"  //* tengo mis dudas de si poner logica en el service o en  el controller, así que se verá logica desparramada, en la correción podre ver si está bien o no 

const createObjetiveService = async (name) =>{
    const objetiveExists = await objetive.findOne({name:name.toLowerCase().trim()})
    if(objetiveExists){
        throw new Error(`objetive ${name} already exists`)
    }
    const newObjetive = new objetive({name})
    const savedObjetive = await newObjetive.save()
    return savedObjetive
}

const getObjetiveService = async () =>{
    const getObjetives = await objetive.find()
    if(getObjetives.length === 0){
        throw new Error(`no objetives found`)
    }
    return getObjetives
}

const deleteObjetiveService = async (objetiveId) =>{
    const deleteObjetive = await objetive.findOne({_id: objetiveId})
    if(!deleteObjetive){
        const error = new Error("objetive not found")
        throw error
    }
    await objetive.findByIdAndDelete(objetiveId)
    return { message: "student deleted succesfully"}
}

const updateObjetiveService = async (objetiveId,updateData) =>{
    const objetiveExists = await objetive.findById(objetiveId)
    if(!objetiveExists){
        const error = new Error(`objetive not found`)
        error.statusCode = 404
        throw error
    }
    const updatedObjetive = await objetive.findByIdAndUpdate(objetiveId, updateData,{new:true})
    return {updatedObjetive , message: `objetive updated succesfully`}
}
export {createObjetiveService, getObjetiveService, deleteObjetiveService, updateObjetiveService}

