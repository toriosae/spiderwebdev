/*******************
 * Evan Li (artworks.js)
 * 301139281
 **********************/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bookController = require('../controllers/artwork');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let artwork = require('../models/artworks');
/*
router.get('/', (req, res, next) => {
    // find all books in the books collection
    artwork.find( (err, books) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('books/index', {
          title: 'Art Gallery',
          books: books
        });
      }
    });
  
  });

  router.get('/add', (req, res, next) => {
    // find all books in the books collection
   
        res.render('books/details', {
          title: 'Add a artwork',
          books: ''
         
        });
      
        
  
  });

  router.post('/add', (req, res, next) => {

  
     let newArtwork = artwork({
      "Title": req.body.title,
      "Year": req.body.year,
      "Artist": req.body.artist,
      "Style": req.body.style
     
  });

  artwork.create(newArtwork, (err, artwork) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the artwork list
          res.redirect('/artgallery');
      }
  });

});

// GET the Artwork Details page in order to edit an existing Artwork
router.get('/edit/:id', (req, res, next) => {

      
   
     let id = req.params.id;


      artwork.findById(id, (err, artworkToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('books/details', {title: 'Edit Artwork', books: artworkToEdit
            })
        }
    });


});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  
     let id = req.params.id;

     let updatedArtwork = artwork({
         "_id": id,
         "Title": req.body.title,
         "Year": req.body.year,
         "Artist": req.body.artist,
         "Style": req.body.style
         
     });
     artwork.updateOne({_id: id}, updatedArtwork, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the artwork list
            res.redirect('/artgallery');
        }
    });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    let id = req.params.id;

    artwork.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the artwork list
             res.redirect('/artgallery');
        }
    });
}); */

router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;

