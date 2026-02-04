import res from "express/lib/response.js";
import { author } from "../@models/Author.js";
import mongoose from "mongoose";


class AuthorController {
    static listAuthors = async (req, res) => {
        try{
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        }catch(error){
            res.status(500).json({messege: `${error.messege} - Falha ao listar Autores`});
        }   
    }

    static registerAuthors = async (req, res) => {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newAuthor});
        }catch(error) {
            res.status(500).json({messege: `${error.messege} - Falha ao cadastrar livro`})
        }   
    }

    static listAuthorID = async (req, res) => {
        try{
            const id = req.params.id;
            const authorFound = await author.findById(id);

            if(authorFound != null){
                res.status(200).send(authorFound);
            }else {
                res.status(404).send({messege: "ID não localizado"});
            }
        }catch(error){
            if(error instanceof mongoose.Error.CastError){
                res.status(400).send({messege: "Os dados fornecidos estão incorretos"});    
            }else{
                res.status(500).send({messege: "Falha no servidor"});
            }
        }   
    }

    static updateAuthor = async (req, res) => {
        try{
            const id = req.params.id;
            const authorFound = await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Livro Atualizado!"});
        }catch(error){
            res.status(500).json({messege: "Falha ao atualizado o livro"});
        }  
    }

    static deleteAuthor = async (req, res) => {
        try {
            const id = req.params.id;
            const authorFound = await author.findByIdAndDelete(id);
            res.status(200).send("Livro removido com sucesso");
        } catch (error) {
            res.status(500).json({messege: `${error.messege} - Erro ao tentar deletar livro!`});
        }
    }
}

export default AuthorController;
