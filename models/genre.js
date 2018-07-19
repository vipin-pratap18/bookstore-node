var mongoose = require('mongoose');

//Genre schema
var genreSchema = mongoose.Schema({

    name : {
      type: String,
      required: true
    },
    create_date:{
      type: Date,
      default: Date.now
    }

});


var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get genres

module.exports.getGenres = function(callback, limit){

    Genre.find(callback).limit(limit);
}


//Add genres

module.exports.addGenres = function(genre, callback){

    Genre.create(genre, callback);
}



//Update genres

/*module.exports.updateGenres = function(id, genre, options, callback){

    Genre.create(genre, callback);
}*/
