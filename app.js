const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/book");

app.set("view engine", "ejs");

mongoose.set("strictQuery", false);
const dbURI =
  "mongodb+srv://abrarfaiaz0:mongoose1234@cluster0.50hznln.mongodb.net/Library";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
  });

app.use(express.static("public"));

app.get("/new-book", (req, res) => {
  const book = new Book({
    title: "Kill a Mockinbird",
    author: "Steven Stonne",
    genre: ["asd", "aassd"],
  });
  book
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/about-us", (req, res) => {
  res.render("about");
});
app.use((req, res) => {
  res.status(404).render("404");
});
