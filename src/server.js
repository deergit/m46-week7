const express = require("express");
const app = express();

// app.use("/music", express.static("music"));
// app.use("/music/about", express.static("music/about.html"));
// app.use("/music/my-music", express.static("music/mymusic.html"));
// app.use("/books", express.static("books"));
// app.use("/", express.static("anotherRoute"));

app.use(express.json());

app.get("/book", (request, response) => {
  const book = {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkein",
    genre: "Fantasy"
  }

  const successResponse = {
    message: "Response sent successfully",
    book: book
  }

  response.send(successResponse);
})

app.get("/anotherroute", (request, response) => {
  response.send("Hello from another route");
})

app.post("/book", (request, response) => {
  console.log(request.body);

  response.send("Data received");
})

app.listen(5001, () => console.log("Listen server open"));