import express from "express"
import bodyParser from "body-parser"
import session from "express-session"
import { connectDB } from "./db.js"
import { PORT, SECRET } from "./config.js"
import { studentRoute } from "./src/routes/studentRoute.js"
import { objetiveRoute } from "./src/routes/objetiveRoute.js"
import { routineRoute } from "./src/routes/routineRoute.js"
import { dietRoute } from "./src/routes/dietRoute.js"
import { welfareRoute } from "./src/routes/welfareRoute.js"
import { assignamentRoute } from "./src/routes/assignamentRoute.js"

const app = express()
connectDB()

app.use(bodyParser.json())  // las solicitudes son convertidas a json
app.use(bodyParser.urlencoded({extended: true})) // el cuerpo de la solicitud se vuelve apto para ser lido
app.use(session(    // generamos el uso de la sesión 
    {secret:SECRET,
    resave:false,
    saveUninitialized:false,
    }))

// acá irán las rutas para las entidades
app.use("/api/student",studentRoute)
app.use("/api/objetive",objetiveRoute)
app.use("/api/routine",routineRoute)
app.use("/api/diet",dietRoute)
app.use("/api/welfare",welfareRoute)
app.use("/api/assignament",assignamentRoute)
// crearemos la escucha del servidor, para hacerlo funcionar 
app.listen(PORT,(() => {console.log(`server running at port ${PORT} [index.js]`)}))

