import res from "express/lib/response.js";
import { author } from "../@models/Author.js";


class AuthorController {
    static async listAuthors(req, res) {
        try{
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        }catch(error){
            res.status(500).json({messege: `${error.messege} - Falha ao listar Autores`});
        }   
    }

    static async registerAuthors(req, res) {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newAuthor});
        }catch(error) {
            res.status(500).json({messege: `${error.messege} - Falha ao cadastrar livro`})
        }   
    }

    static async listAuthorID(req, res) {
        try{
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        }catch(error){
            res.status(500).json({messege: `${error.messege} - Falha ao encontrar livro`});
        }   
    }

    static async updateAuthor(req, res) {
        try{
            const id = req.params.id;
            const authorFound = await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Livro Atualizado!"});
        }catch(error){
            res.status(500).json({messege: "Falha ao atualizado o livro"});
        }  
    }

    static async deleteAuthor(req, res) {
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
