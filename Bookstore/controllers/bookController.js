const BookModel = require("../models/book");
const parseRequestBody = require("../utils/parseRequestBody");
const ParseRequestBody = require("../utils/parseRequestBody");
module.exports = {
    //get all books
    async getBooks(req, res) {
        try {
            const Books = await BookModel.find();
            if (!Books) {
                return res.status(400).json({ message: "No Books" })
            }
            res.json({ data: Books });
        } catch (error) {
            res.status(500).send(error)
        }
    },
    //add books
    async addBook(req, res) {
        // console.log(req.body)
        try {
            const NewBook = new BookModel(req.body);
            const BookAdded = await NewBook.save()
            if (!BookAdded) {
                return res.status(400).json({ message: "No Book Added" })
            }
            res.json({ data: BookAdded });
        } catch (error) {
            res.status(500).send(error)
        }
    },
    

    //get book by ID
    async getBookByID(req, res){
        const id = req.params.id
        try {
            const Book = await BookModel.findById(id);
            if (!Book) {
                return res.status(400).json({ message: "No Book Found" })
            }
            res.json({ data: Book });
        } catch (error) {
            res.status(500).send(error)
        }
    },
    //update book
    async updateBook(req,res){
        const update = parseRequestBody(req.body)
        const id = req.params.id
        try {
            const Book = await BookModel.findByIdAndUpdate(id, {$set: update}, {new: true});
            if (!Book) {
                return res.status(400).json({ message: "No Book Found" })
            }
            res.json({ data: Book });
        } catch (error) {
            res.status(500).send(error)
            
        }
    },
    //delete book
    async deleteBook(req, res){
        const id = req.params.id
        try {
            const Book = await BookModel.findByIdAndDelete(id);
            if (!Book) {
                return res.status(400).json({ message: "No Book Found" })
            }
            res.json({ data: Book , message: "Successfully Deleted" });

        } catch (error) {
            res.status(500).send(error)
            
        }
    }
}