import { createStudentService, deleteStudentService, getStudentService, updateStudentService } from "../services/studentService.js"

const createStudent = async (req,res) =>{ //* req representa la peticion del cliente(thunder client) //* res representa la respuesta que el servidor devuelve al cliente
    try {
        const response = await createStudentService(req.body) //* crea al estudiante con los datos del body dados por studentService.js
        console.log(`we create the student succesfully [studentController.js]`)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({message:`internal server error [studentController.js]`,error: error.message})
    }
}


const getstudent = async (req,res) =>{
    try{
        const student = await getStudentService()
        if(!student || student.length === 0){
            return res.status(404).json({message: "no students found"})
        }
        res.status(200).json(student) // si todo sale bien, responde con los usuarios, 200 significa que salio todo bien
        } catch(error){
        if(error.statusCode){
            return res.status(error.statusCode).json({message:error.message})
        }
        return res.status(500).json({message: "internal server error", error: error.message})
    }
}


const deleteStudent = async (req,res) =>{
    try{
        const studentId = req.params.id // req.params es para obtener parametros de la url. api/student/delete/:id (el :id es el nombre que le ponemos al parametro)
        const result = await deleteStudentService(studentId) // llamamos al servicio para borrar el usuario
        return res.status(200).json(result) // si todo sale bien, responde con el mensaje de exito

    } catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({message: "internal server error", error:error.message})
    }
}


const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updateData = req.body;
        const result = await updateStudentService(studentId, updateData);
        return res.status(200).json(result);
    } catch (error) {
        if (error.statusCode === 400) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "internal server error", error: error.message });
    }
}



export{createStudent, getstudent, deleteStudent, updateStudent}