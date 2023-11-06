/* Routes */

const express = require('express');

//To accesss the router
const router = express.Router(); 

//Importing the account controller
const controllers = require('../controllers/booksController');


//Routes
router.post('/book/create',controllers.createBook);
router.put('/book/update',controllers.updateBook);
router.get('/book/list',controllers.getBooks);
router.delete('/book/delete/:isbn',controllers.deleteBook);
router.get('/book/:isbn',controllers.viewBook);

//Exporting Router to use in other file
module.exports =  router;