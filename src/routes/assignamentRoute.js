import express from "express"
import { createAssignament } from "../controllers/assignamentController.js"

const assignamentRoute = express.Router()
assignamentRoute.post("/createAssignament", createAssignament)
export{assignamentRoute}