import express from "express"
import { createRoutine } from "../controllers/routineController.js"


const routineRoute = express.Router()
routineRoute.post(`/createRoutine`, createRoutine)

export{routineRoute}