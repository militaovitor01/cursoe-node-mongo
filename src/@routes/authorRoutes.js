import express from "express";
import AuthorController from "../@controllers/AuthorController.js";

const routes = express.Router();

routes.get("/books", AuthorController.listAuthors);
routes.get("/books/:id", AuthorController.listAuthorID);
routes.post("/books", AuthorController.registerAuthors);
routes.put("/books/:id", AuthorController.updateAuthor);
routes.delete("/books/:id", AuthorController.deleteAuthor);

export default routes;
