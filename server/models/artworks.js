let mongoose = require('mongoose');

// create a model class
let Artwork = mongoose.Schema({
    Title: String,
    //Description: String,
    Year: Number,
    Artist: String,
    Style: String
},
{
  collection: "artgallery"
});

module.exports = mongoose.model('Artwork', Artwork);
