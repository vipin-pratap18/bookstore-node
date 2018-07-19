var mongoose = require('mongoose');

 //book schemaa
var bookSchema = mongoose.Schema({

    title : {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    author: {
      type: String,
      required: true
    },
    publisher: {
      type: String
    },
    pages: {
      type: Number
    },
    image_url: {
      type: String
    },
    buy_url: {
      type: String
    },
    create_date:{
      type: Date,
      default: Date.now
    }

});


var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books

module.exports.getBooks = function(callback, limit){

    Book.find(callback).limit(limit);
}



//Get book

module.exports.getBookById = function(id, callback){

    Book.findById(id, callback);
}


//Add book

module.exports.addBook = function(book, callback){

    Book.create(book, callback);
}
