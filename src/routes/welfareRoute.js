import express from "express"
import { createWelfare, deleteWelfare, getWelfare, updateWelfare } from "../controllers/welfareController.js"

const welfareRoute = express.Router()
welfareRoute.post(`/createWelfare`, createWelfare)
welfareRoute.get(`/getWelfare`, getWelfare)
welfareRoute.delete(`/deleteWelfare/:id`, deleteWelfare)
welfareRoute.put(`/updateWelfare/:id`, updateWelfare)

export{welfareRoute}