/*******************
 * Evan Li (books.js)
 * 301139281
 * Web app: evanlimidterm.herokuapp.com
 **********************/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



let book = require('../models/books');

router.get('/', (req, res, next) => {
    // find all books in the books collection
    book.find( (err, books) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('books/index', {
          title: 'Books',
          books: books
        });
      }
    });
  
  });

  router.get('/add', (req, res, next) => {
    // find all books in the books collection
   
        res.render('books/details', {
          title: 'Add a book',
          books: ''
         
        });
      
        
  
  });

  router.post('/add', (req, res, next) => {

  
     let newBook = book({
      "Title": req.body.title,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
     
  });

  book.create(newBook, (err, book) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the book list
          res.redirect('/books');
      }
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {

      
   
     let id = req.params.id;


      book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('books/details', {title: 'Edit Book', books: bookToEdit
            })
        }
    });


});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  
     let id = req.params.id;

     let updatedBook = book({
         "_id": id,
         "Title": req.body.title,
         "Price": req.body.price,
         "Author": req.body.author,
         "Genre": req.body.genre
         
     });
     book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    let id = req.params.id;

    book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/books');
        }
    });
});


module.exports = router;

