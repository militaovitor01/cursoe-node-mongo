import express from "express";
import BookController from "../controllers/booksController.js"

const routes = express.Router();

routes.get("/books", BookController.listBooks);