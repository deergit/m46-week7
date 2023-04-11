const express = require("express");
const app = express();

// app.use("/music", express.static("music"));
// app.use("/music/about", express.static("music/about.html"));
// app.use("/music/my-music", express.static("music/mymusic.html"));
// app.use("/books", express.static("books"));
// app.use("/", express.static("anotherRoute"));

let bookList = [{
  title: "Lord of the Rings",
  author: "J.R.R. Tolkein",
  genre: "Fantasy"
}]

app.use(express.json());

app.get("/books", (request, response) => {
  const successResponse = {
    message: "Response sent successfully",
    books: bookList
  }

  response.send(successResponse);
});

app.post("/books", (request, response) => {
  console.log(`incoming data: ${request.body}`);

  const newBook = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre
  }

  bookList.push(newBook);

  response.send("Data received");
});

app.listen(5001, () => console.log("Listen server open"));