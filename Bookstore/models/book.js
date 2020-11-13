const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : {type: String, required: true},
    author : {type: String, required: true},
    genre : {type: String, required: true},
    yearPublished: {type: Date, required: true},
    price: {type: Number, required: true}
});

const BookModel = mongoose.model("book", BookSchema);
module.exports = BookModel;
