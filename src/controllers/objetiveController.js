import { createObjetiveService, deleteObjetiveService, getObjetiveService, updateObjetiveService } from "../services/objetiveService.js"

const createObjetive = async (req,res) =>{
    try {
        const name = req.body.name
        console.log(req.body, "debug [objetiveController.js]")
        const savedObjetive = await createObjetiveService(name)
        return res.status(201).json({message:"new objetive created", data:savedObjetive}) //*data contendría el objetivo creado en cuestion
    } catch (error) {
        return res.status(500).json({message:"internal server error", error: error.message})
    }
}
export const getObjetive = async (req, res) => {
    try {
    const objetive= await getObjetiveService();
    res.status(200).json(objetive);
    } catch(error){
        if(error.statusCode){
            return res.status(error.statusCode).json({message:error.message})
        }
        return res.status(500).json({message: "internal server error", error: error.message})
    }
}
const deleteObjetive = async (req,res) =>{
    try{
        const objetiveId = req.params.id // req.params es para obtener parametros de la url. api/objetive/delete/:id (el :id es el nombre que le ponemos al parametro)
        const result = await deleteObjetiveService(objetiveId) // llamamos al servicio para borrar el usuario
        return res.status(200).json(result) // si todo sale bien, responde con el mensaje de exito

    } catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({message: "internal server error", error:error.message})
    }
}


const updateObjetive = async (req, res) => {
    try {
        const objetiveId = req.params.id;
        const updateData = req.body;
        const result = await updateObjetiveService(objetiveId, updateData);
        return res.status(200).json(result);
    } catch (error) {
        if (error.statusCode === 400) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "internal server error", error: error.message });
    }
}
export{createObjetive,deleteObjetive,updateObjetive}