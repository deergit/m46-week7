const express = require("express");
const app = express();
require("dotenv").config();
require("./db/connection");

let bookList = [{
  id: 1,
  title: "Lord of the Rings",
  author: "J.R.R. Tolkein",
  genre: "Fantasy"
}];

app.use(express.json());

app.get("/books", (request, response) => {
  const successResponse = {
    message: "Response sent successfully",
    books: bookList
  }

  response.send(successResponse);
});

app.post("/books", (request, response) => {
  const newBook = {
    id: bookList.length + 1,
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre
  }

  bookList.push(newBook);
  response.send("Data received");
});

app.put("/books/:id", (request, response) => {
  const match = bookList.find(book => book.id === parseInt(request.params.id));

  if (match) {
    const updateBook = {
      id: match.id,
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre
    }

    match.title = updateBook.title ?? match.title;
    match.author = updateBook.author ?? match.author;
    match.genre = updateBook.genre ?? match.genre;

    response.send("Entry updated");
  } else {
    response.sendStatus(400);
  }
});

app.delete("/books/:id", (request, response) => {
  const match = bookList.find(book => book.id === parseInt(request.params.id));

  if (match) {
    bookList = bookList.filter(book => book.id !== match.id);
    response.send("Entry deleted");
  } else {
    response.sendStatus(400);
  }
});

app.listen(5001, () => console.log("Listen server open"));