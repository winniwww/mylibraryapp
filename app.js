const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>Library System</H1>");
});

// handle author-management related requests
// first import the author router
const authorRouter = require("./routes/authorRouter");

// the author routes are added onto the end of '/author-management'
app.use("/author-management", authorRouter);

// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!");
});
