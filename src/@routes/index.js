import express from "express";
import book from "../@controllers/booksController.js"; 


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros);
};

export default routes;
