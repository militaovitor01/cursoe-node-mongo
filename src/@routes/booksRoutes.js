import express from "express";
import BookController from "../@controllers/booksController.js";

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.get("/books/search", BookController.listBooksPublisher);
routes.get("/books/:id", BookController.listBookID);
routes.post("/books", BookController.registerBooks);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;
