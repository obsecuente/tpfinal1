import objetive from "../models/objetiveModel.js";
import student from "../models/studentModel.js";

const createStudentService = async (studentData) => {
    const { currentObjetive } = studentData;
    const objetiveExists = await objetive.findById(currentObjetive);
    if (!objetiveExists) {
    throw new Error("invalid objetive selected");
    }
    const studentExists = await student.findOne({ email: studentData.email });
    if (studentExists) {
    throw new Error(
        `sorry ${studentData.name}, there is already a user with that email [studentService.js]`
    );
    }
    const newStudent = new student(studentData);
    await newStudent.save();
    return {
    message: `congratulations ${newStudent.name}, you are now part of the team! [studentService.js]`,
    };
};

const getStudentService = async () => {
    const students = await student.find();
    return students;
};

const deleteStudentService = async (studentId) => {
    const studentExist = await student.findOne({_id: studentId})
    if(!studentExist){
        const error = new Error("student not found")
        throw error
    }
    await student.findByIdAndDelete(studentId)
    return { message: "student deleted succesfully"}
}

const updateStudentService = async (studentId,updateData) =>{
    const studentExist = await student.findById(studentId)
    if(!studentExist){
        const error = new Error("student not found")
        error.statusCode = 404
        throw error
    }
    const updatedStudent = await student.findByIdAndUpdate(studentId, updateData, {new:true})
    return updatedStudent
}


export{createStudentService,getStudentService,deleteStudentService,updateStudentService}