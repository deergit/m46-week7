const express = require("express");
const app = express();

app.use("/music", express.static("music"));
app.use("/music/about", express.static("music/about.html"));
app.use("/books", express.static("books"));
app.use("/", express.static("anotherRoute"));

app.listen(5001, () => console.log("Listen server open"));