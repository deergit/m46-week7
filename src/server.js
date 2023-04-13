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

app.put("/books/updatebook", async (req, res) => {
  try {
    const match = await Book.findOne({ title: req.query.title });
    const updatedBook = {
      _id: match.id,
      title: req.body.title ?? match.title,
      author: req.body.author ?? match.author,
      genre: req.body.genre ?? match.genre,
      __v: match.__v
    }

    await Book.replaceOne(match, updatedBook, { upsert: false });

    const successResponse = {
      message: "success",
      updatedBook: updatedBook
    }

    res.status(201).json(successResponse);
  } catch {
    res.sendStatus(400);
  }
});

app.delete("/books/deletebook", async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ title: req.query.title });

    const successResponse = {
      message: "successfully deleted",
      deletedBook: deletedBook
    }

    res.status(201).json(successResponse);
  } catch {
    res.sendStatus(400);
  }
});

app.delete("/books/deleteallbooks", async (req, res) => {
  try {
    await Book.deleteMany({});

    const successResponse = {
      message: "successfully deleted all books"
    }

    res.status(201).json(successResponse);
  } catch {
    res.sendStatus(400);
  }
});

app.listen(5001, () => console.log("Listen server open on port 5001"));