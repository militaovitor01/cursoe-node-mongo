import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./@routes/index.js";
import errorHandler from "./middlewares/errorHandling.js";

const connection = await connectDatabase();

// In case of error in the connection with DB
connection.on("error", (erro) => {
  console.error("Erro de conexao", erro);
});

// In case of success in the connection with DB
connection.once("open", () => {
  console.log("Conexão estabelecida com sucesso");
});

const app = express();
routes(app);

app.use(errorHandler);

export default app;
