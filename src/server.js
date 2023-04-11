const express = require("express");
const app = express();

// app.use("/music", express.static("music"));
// app.use("/music/about", express.static("music/about.html"));
// app.use("/music/my-music", express.static("music/mymusic.html"));
// app.use("/books", express.static("books"));
// app.use("/", express.static("anotherRoute"));

app.use(express.json)

app.get("/book", (request, response) => {
  response.send("Hello from the book route");
})

app.listen(5001, () => console.log("Listen server open"));