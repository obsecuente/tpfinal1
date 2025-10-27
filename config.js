import { config } from "dotenv"; //* dotenv sirve para que las variables de entorno como las del archivo .env se carguen
config(); //* config() se encarga de leer las variables de entorno
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const UTN_DB = process.env.UTN_DB;
const SECRET = process.env.secret;
export { PORT, MONGODB_URI, UTN_DB, SECRET };
