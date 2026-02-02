import res from "express/lib/response.js";
import book from "../models/Books.js";


class BookController {
    static async listBooks(req, res) {
        const listBooks = await book.find({});
        res.status(200).json(listBooks);
    }

    static async registerBooks(req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newBook});
        }catch(erro) {
            res.status(500).json({messege: `${erro.messege} - Falha ao cadastrar livro`})
        }   
    }
}

export default BookController;