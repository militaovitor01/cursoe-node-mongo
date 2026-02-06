import res from "express/lib/response.js";
import { author } from "../@models/Author.js";


class AuthorController {
    static listAuthors = async (req, res, next) => {
        try{
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        }catch(error){
            next(error);
        }   
    }

    static registerAuthors = async (req, res, next) => {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newAuthor});
        }catch(error) {
            next(error);
        }   
    }

    static listAuthorID = async (req, res, next) => {
        try{
            const id = req.params.id;
            const authorFound = await author.findById(id);

            if(authorFound != null){
                res.status(200).send(authorFound);
            }else {
                res.status(404).send({messege: "ID não localizado"});
            }
        }catch(error){
            next(error);
        }   
    }

    static updateAuthor = async (req, res, next) => {
        try{
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Livro Atualizado!"});
        }catch(error){
            next(error);
        }  
    }

    static deleteAuthor = async (req, res, next) => {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).send("Livro removido com sucesso");
        } catch (error) {
            next(error);
        }
    }
}

export default AuthorController;
