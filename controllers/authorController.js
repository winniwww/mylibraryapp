const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("author");


// function to handle a request to get all authors
const getAllAuthors = async (req, res) => {

  try {
    const all_authors = await Author.find();
    return res.send(all_authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// Function to handle a request to a particular author
const getAuthorByID = async (req, res) => {
  var authors = await Author.find();
  // search for author in the database via ID
  const author = authors.find(author => author.id === req.params.id);
  if (author){
    res.send(author); // send back the author details
  }
  else{
    // you can decide what to return if author is not found
    // currently, an empty list will be return.
    res.send('Not a valid ID');
  }
};

// function to modify author by ID
const updateAuthor = (req, res) => {
  if(req.body.id === undefined) {
    res.send("Error: Missing 'id' input");
    return;
  }

  let author = {};
  author.id = req.body.id;
  author.first_name = req.body.first_name;
  author.last_name = req.body.last_name;

  let query = {id:req.body.id}
  Author.update(query, author, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.send('Successfully updated');
    }
  });
};



// function to add author
const addAuthor = (req, res) => {
  let author = new Author();
  author.id = req.body.id;
  author.first_name = req.body.first_name;
  author.last_name = req.body.last_name;
  author.save(function(err){
    if(err) {
      next(err);
      return;
    } else {
      res.send('Succesfully added');
    }
  });
};


// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};
