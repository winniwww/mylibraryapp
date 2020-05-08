const express = require('express');

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require('../controllers/authorController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', authorController.getAllAuthors);
authorRouter.get('/:id', authorController.getAuthorByID);
authorRouter.post('/add', authorController.addAuthor);
authorRouter.put('/update', authorController.updateAuthor);

// export the router
module.exports = authorRouter;
