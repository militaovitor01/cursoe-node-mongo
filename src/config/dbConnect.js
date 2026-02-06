import mongoose from "mongoose";
import "dotenv/config"

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.STRING_CONNECTION_DB);   
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

export default connectDatabase;