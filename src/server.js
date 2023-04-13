require("dotenv").config();
require("./db/connection");

const express = require("express");

const Book = require("./modbooks/model");

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
  const bookList = await Book.find({});
  
  const successResponse = {
    message: "success",
    books: bookList
  }

  res.status(200).json(successResponse);
});

app.post("/books/addbook", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

app.put("/books/updatebookauthor", async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate({ title: req.body.title }, { $set: { author: req.body.author }}, { new: true });

    const successResponse = {
      message: "success",
      updatedBook: updatedBook
    }

    res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
  }
});

app.put("/books/", (req, res) => {
  const match = Book.find({ title: req.body.title })

  if (match) {
    const updateBook = {
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

app.delete("/books/deletebook", (req, res) => {
  const match = bookList.find(book => book.id === parseInt(req.params.id));

  if (match) {
    bookList = bookList.filter(book => book.id !== match.id);
    res.send("Entry deleted");
  } else {
    res.sendStatus(400);
  }
});

app.listen(5001, () => console.log("Listen server open on port 5001"));