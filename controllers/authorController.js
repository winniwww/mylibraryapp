// provide the controller a link to the author model
var authors = require('../models/author.js');

// Function to handle a request to get all authors
const getAllAuthors = (req, res) => {
  res.send(authors); // return the list of authors
};

// Remember to export the callbacks
module.exports = {
  getAllAuthors,
};
