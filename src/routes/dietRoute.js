import express from "express"
import { createDiet } from "../controllers/dietController.js"


const dietRoute = express.Router()
dietRoute.post(`/createDiet`, createDiet)

export{dietRoute}