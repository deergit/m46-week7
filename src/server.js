const express = require("express");
const app = express();
const Book = require("./modbooks/model");
require("dotenv").config();
require("./db/connection");

app.use(express.json());
app.use("/books", express.static("books"));

app.get("/books/getallbooks", (req, res) => {
  const successResponse = {
    message: "Response sent successfully",
    books: bookList
  }

  res.send(successResponse);
});

app.post("/books/addbook", async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre
  });

  const successResponse = {
    message: "success",
    newBook: newBook
  }

  res.status(201).json(successResponse);
});

app.put("/books/:id", (req, res) => {
  const match = bookList.find(book => book.id === parseInt(req.params.id));

  if (match) {
    const updateBook = {
      id: match.id,
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    }

    match.title = updateBook.title ?? match.title;
    match.author = updateBook.author ?? match.author;
    match.genre = updateBook.genre ?? match.genre;

    res.send("Entry updated");
  } else {
    res.sendStatus(400);
  }
});

app.delete("/books/:id", (req, res) => {
  const match = bookList.find(book => book.id === parseInt(req.params.id));

  if (match) {
    bookList = bookList.filter(book => book.id !== match.id);
    res.send("Entry deleted");
  } else {
    res.sendStatus(400);
  }
});

app.listen(5001, () => console.log("Listen server open on port 5001"));