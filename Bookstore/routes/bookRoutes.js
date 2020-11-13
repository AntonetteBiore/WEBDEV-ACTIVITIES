const express = require("express")
const Router = express.Router()
const BookController = require("../controllers/bookController")

Router.get('/books', BookController.getBooks)

Router.post('/', BookController.addBook)

module.exports = Router;
