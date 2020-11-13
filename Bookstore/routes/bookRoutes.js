const express = require("express")
const Router = express.Router()
const BookController = require("../controllers/bookController")

Router.get('/books', BookController.getBooks)

Router.post('/', BookController.addBook)

Router. get('/books/:id', BookController.getBookByID)

Router.patch('/:id', BookController.updateBook)

Router.delete('/:id', BookController.deleteBook)

module.exports = Router;
