import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  switch (true) {
    case error instanceof mongoose.Error.CastError:
      return res.status(400).json({
        message: "ID inválido",
      });

    case error instanceof mongoose.Error.ValidationError:{
        const errorMessages = Object.values(error.errors)
          .map((error => error.message))
          .join("; ");
  
      return res.status(400).send({message:`Os seguintes erros foram encontrados: ${errorMessages}`});
    }

    default:
      console.error(error); // loga erro inesperado
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
  }
}


export default errorHandler;
