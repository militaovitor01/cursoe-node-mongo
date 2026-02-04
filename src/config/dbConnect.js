import mongoose from "mongoose";

async function connectDatabase() {
    try {
        await mongoose.connect("mongodb+srv://militaovitor:admin123@bookstorecourse.qhp0isb.mongodb.net/bookstore?appName=BookstoreCourse");   
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

export default connectDatabase;