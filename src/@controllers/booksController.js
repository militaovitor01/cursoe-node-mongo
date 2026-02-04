import res from "express/lib/response.js";
import book from "../@models/Books.js";
import { author } from "../@models/Author.js";


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
        const newBook = req.body;

        try{
            const authorFound = await author.findById(newBook.author);
            const completeBook = {...newBook, author: {...authorFound._doc}};

            const createBook = await book.create(completeBook);
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

    static async listBooksPublisher(req, res) {
        const publisher = req.query.publisher;
        try {
            const booksPublisher = await book.find({publisher: publisher});
            res.status(200).json(booksPublisher);
        } catch (error) {
            res.status(500).json({messege: `${error.messege} - Erro ao buscar livro!`});
        }
    }
}

export default BookController;
