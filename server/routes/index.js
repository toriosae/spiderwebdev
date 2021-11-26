// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let indexController = require('../controllers/index');

// define the game model
let book = require('../models/artworks');

/* 
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Art Gallery Home',
    books: ''
   });
}); */

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET Contact Us page. */
router.get('/artgallery', indexController.displayArtPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;

//------------------------------

