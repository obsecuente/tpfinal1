Trabajo Práctico Final Integrador de Backend
Descripción General

El presente proyecto consiste en el desarrollo de una API RESTful implementada con Node.js, Express y MongoDB (utilizando Mongoose como ODM).
El objetivo es construir un backend modular, robusto y escalable que gestione entidades vinculadas al bienestar y la organización de estudiantes, incluyendo estudiantes, objetivos y planes de bienestar (welfare), entre otras.

La aplicación implementa las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para cada entidad, asegurando una clara separación de responsabilidades mediante el uso de tres capas principales:

Controller: gestiona las solicitudes y respuestas HTTP.

Service: contiene la lógica de negocio y las operaciones sobre la base de datos.

Model: define la estructura, validación y relaciones de los datos en MongoDB.

El proyecto incorpora buenas prácticas de desarrollo, tales como el uso de middlewares, validaciones, encriptación de contraseñas mediante bcrypt, manejo de errores con bloques try/catch y utilización de códigos de estado HTTP adecuados. Asimismo, se emplea el método populate() de Mongoose para resolver referencias entre colecciones.

Tecnologías Utilizadas

Node.js

Express

MongoDB

Mongoose

dotenv

body-parser

express-session

bcryptjs

cors

nodemon (para entorno de desarrollo)

Estructura del Proyecto

tpfinal1/
│
├── index.js (Punto de entrada del servidor)
├── config/
│ └── db.js (Conexión a MongoDB)
│
├── src/
│ ├── controllers/ (Controladores de las entidades)
│ │ ├── studentController.js
│ │ ├── objetiveController.js
│ │ └── welfareController.js
│ │
│ ├── services/ (Capa de lógica de negocio y comunicación con la base de datos)
│ │ ├── studentService.js
│ │ ├── objetiveService.js
│ │ └── welfareServices.js
│ │
│ ├── models/ (Definición de los esquemas Mongoose)
│ │ ├── studentModel.js
│ │ ├── objetiveModel.js
│ │ └── welfareModel.js
│ │
│ └── routes/ (Definición de rutas y endpoints)
│ ├── studentRoute.js
│ ├── objetiveRoute.js
│ └── welfareRoute.js
│
└── .env (Variables de entorno)

Esquema de Base de Datos
Modelo Student

Campos: name, lastName, age, gender, email, password, currentObjetive

Ejemplo:
{
"name": "Gonzalo",
"lastName": "Pérez",
"age": 23,
"gender": "masculino",
"email": "gonza@mail.com
",
"password": "HasheadaConBcrypt",
"currentObjetive": "ObjectId(...)"
}

Modelo Objetive

Campos: name

Ejemplo:
{
"name": "weight loss"
}

Modelo Welfare

Campos: name, objetive (ref), routines (array de ObjectId), diets (array de ObjectId)

Ejemplo:
{
"name": "rutina de fuerza avanzada",
"objetive": "ObjectId(...)",
"routines": ["ObjectId(...)"],
"diets": ["ObjectId(...)"]
}

Endpoints y Verbos HTTP
Student Routes – /api/student

POST /createStudent
Crea un nuevo estudiante.
Cuerpo de ejemplo:
{
"name": "Juan",
"lastName": "López",
"age": 21,
"gender": "masculino",
"email": "juan@mail.com
",
"password": "Juan1234",
"currentObjetive": "ObjectId(...)"
}
Respuesta: 201 Created → { "message": "congratulations Juan, you are now part of the team!" }

GET /getStudent
Obtiene todos los estudiantes.
Respuesta: 200 OK → array de estudiantes.

PUT /updateStudent/:id
Actualiza un estudiante existente.
Cuerpo: { "name": "Juan actualizado" }
Respuesta: 200 OK → objeto actualizado.

DELETE /deleteStudent/:id
Elimina un estudiante por ID.
Respuesta: 200 OK → { "message": "student deleted succesfully" }

Objetive Routes – /api/objetive

POST /createObjetive
Crea un nuevo objetivo.
Cuerpo: { "name": "muscle gain" }
Respuesta: 201 Created → { "message": "new objetive created" }

GET /getObjetive
Obtiene todos los objetivos.
Respuesta: 200 OK → array de objetivos.

PUT /updateObjetive/:id
Actualiza un objetivo existente.
Cuerpo: { "name": "weight loss" }
Respuesta: 200 OK → { "message": "objetive updated succesfully" }

DELETE /deleteObjetive/:id
Elimina un objetivo por ID.
Respuesta: 200 OK → { "message": "objetive deleted succesfully" }

Welfare Routes – /api/welfare

POST /createWelfare
Crea un nuevo plan de bienestar.
Cuerpo:
{
"name": "Plan de masa muscular",
"objetive": "ObjectId(...)",
"routines": ["ObjectId(...)"],
"diets": ["ObjectId(...)"]
}
Respuesta: 201 Created → welfare creado con populate de objetive, routines y diets.

GET /getWelfare
Obtiene todos los planes de bienestar.
Respuesta: 200 OK → array de welfare con datos populados.

PUT /updateWelfare/:id
Actualiza un plan existente.
Cuerpo: { "name": "Plan de definición" }
Respuesta: 200 OK → welfare actualizado.

DELETE /deleteWelfare/:id
Elimina un plan por ID.
Respuesta: 200 OK → { "message": "welfare deleted succesfully" }

Instrucciones de Ejecución

Instalar las dependencias del proyecto mediante el comando:
npm install

Crear un archivo .env en la raíz del proyecto con el siguiente contenido de ejemplo:
PORT=3000
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/db
SECRET=midemo123

Ejecutar el servidor con alguno de los siguientes comandos:
npm run dev
o
nodemon index.js

Probar los endpoints utilizando una herramienta de pruebas como Thunder Client, Postman o Insomnia.
Ejemplo de URL base:
http://localhost:3000/api/student/getStudent

Códigos de Estado HTTP

200: Solicitud exitosa.
201: Recurso creado exitosamente.
400: Solicitud inválida.
404: Recurso no encontrado.
500: Error interno del servidor.

Autor

Proyecto desarrollado por Gonzalo Maximiliano Arévalo.
Diplomatura en Desarrollo Fullstack JavaScript – Universidad Tecnológica Nacional (UTN).
Año 2025.

Referencias

Documento elaborado en base a la consigna oficial del trabajo práctico integrador de la UTN, correspondiente a la materia de Backend.
El proyecto implementa el patrón de arquitectura MVC con separación de responsabilidades en controladores, servicios y modelos, cumpliendo con los lineamientos académicos establecidos.
