import res from "express/lib/response.js";
import book from "../@models/Books.js";
import { author } from "../@models/Author.js";


class BookController {
    static listBooks = async (req, res, next) => {
        try{
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        }catch(error){
            next(error);
        }   
    }

    static registerBooks = async (req, res, next) => {
        const newBook = req.body;

        try{
            const authorFound = await author.findById(newBook.author);
            const completeBook = {...newBook, author: {...authorFound._doc}};

            const createBook = await book.create(completeBook);
            res.status(201).json({messege:"Livro criado com sucesso", livro: newBook});
        }catch(error) {
            next(error);
        }   
    }

    static listBookID = async (req, res, next) => {
        try{
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        }catch(error){
            next(error);
        }   
    }

    static updateBook = async (req, res, next) => {
        try{
            const id = req.params.id;
            const bookFound = await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Livro Atualizado!"});
        }catch(error){
            next(error);
        }  
    }

    static deleteBook = async (req, res, next) => {
        try {
            const id = req.params.id;
            const bookFound = await book.findByIdAndDelete(id);
            res.status(200).send("Livro removido com sucesso");
        } catch (error) {
            next(error);
        }
    }

    static listBooksPublisher = async (req, res, next) => {
        const publisher = req.query.publisher;
        try {
            const booksPublisher = await book.find({publisher: publisher});
            res.status(200).json(booksPublisher);
        } catch (error) {
            next(error);
        }
    }
}

export default BookController;
