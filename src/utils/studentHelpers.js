import student from "../models/studentModel.js"
export const findStudentByIdAndCheck = async (studentId) => {
    const studentExist = await student.findOne({_id: studentId}) // busca en la base de datos si existe un usuario con ese _id y se obtiene el parametro para studentId
        if(!studentExist){
            const error = new Error("student not found")
            throw error
        }
        return studentExist
}