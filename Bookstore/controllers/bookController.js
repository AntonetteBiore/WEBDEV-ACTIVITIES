const BookModel = require("../models/book");
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

    //GET SPECIFIC BOOK ID
    ///api/bookstore/books/:id - returns a specific book from the database.

    //UPDATE DETAILS OF A BOOK
    ///api/bookstore/:id - update specific details of a book in the database.

    //DELETE A BOOK
    ///api/bookstore/:id - delete a book from the database.
}