import express from "express"
import { createStudent, deleteStudent, getstudent, updateStudent } from "../controllers/studentController.js"

const studentRoute = express.Router()
studentRoute.post(`/createStudent`, createStudent)
studentRoute.get("/getStudent", getstudent) // obtener usuarios         //http://localhost:3000/api/student/getstudent  
studentRoute.delete("/deleteStudent/:id",deleteStudent) // borrar usuario
studentRoute.put("/updateStudent/:id",updateStudent) // actualizar usuario

export{studentRoute}