import res from "express/lib/response.js";
import book from "../@models/Books.js";


class BookController {
    static async listBooks(req, res) {
        try{
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        }catch(error){
            res.status(500).json({messege: `${error.messege} - Falha ao listar livros`});
        }   
    }

    static async registerBooks(req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newBook});
        }catch(error) {
            res.status(500).json({messege: `${error.messege} - Falha ao cadastrar livro`})
        }   
    }

    static async listBookID(req, res) {
        try{
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        }catch(error){
            res.status(500).json({messege: `${error.messege} - Falha ao encontrar livro`});
        }   
    }

    static async updateBook(req, res) {
        try{
            const id = req.params.id;
            const bookFound = await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Livro Atualizado!"});
        }catch(error){
            res.status(500).json({messege: "Falha ao atualizado o livro"});
        }  
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findByIdAndDelete(id);
            res.status(200).send("Livro removido com sucesso");
        } catch (error) {
            res.status(500).json({messege: `${error.messege} - Erro ao tentar deletar livro!`});
        }
    }
}

export default BookController;
