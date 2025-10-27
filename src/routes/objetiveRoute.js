import express from "express"
import { createObjetive, deleteObjetive, getObjetive, updateObjetive } from "../controllers/objetiveController.js"


const objetiveRoute = express.Router()
objetiveRoute.post(`/createObjetive`, createObjetive)
objetiveRoute.get("/getObjetive",getObjetive)
objetiveRoute.delete("/deleteObjetive/:id",deleteObjetive)
objetiveRoute.put("/updateObjetive/:id",updateObjetive)

export{objetiveRoute}