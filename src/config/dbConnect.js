import mongoose from "mongoose";

async function connectDatabase() {
    mongoose.connect("mongodb+srv://militaovitor:admin123@bookstorecourse.qhp0isb.mongodb.net/bookstore?appName=BookstoreCourse");   
    return mongoose.connection;
}

export default connectDatabase;