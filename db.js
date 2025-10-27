import mongoose from "mongoose";
import { MONGODB_URI, UTN_DB } from "./config.js"; //* mongodb_uri = mongodb://127.0.0.1:27017 , utn_db = base0

export const connectDB = async () => {
    try {
    await mongoose.connect(`${MONGODB_URI}/${UTN_DB}`);
    console.log("database connected [db.js]");
    } catch (error) {
    console.error(`error connecting to database ${error} [db.js]`);
    process.exit(1);
    }
};
