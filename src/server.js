require("dotenv").config();
require("./db/connection");

const express = require("express");
const ctrl = require("./controllers/controller")

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
  const response = await ctrl.getallbooks(req, res);
  res.send(response);
});

app.get("/books/getbook", async (req, res) => {
  const response = await ctrl.getbook(req, res);
  res.send(response);
});

app.post("/books/addbook", async (req, res) => {
  const response = await ctrl.addbook(req, res);
  res.send(response);
});

app.put("/books/updatebookauthor", async (req, res) => {
  const response = await ctrl.updatebookauthor(req, res);
  res.send(response);
});

app.put("/books/updatebook", async (req, res) => {
  const response = await ctrl.updatebook(req, res);
  res.send(response);
});

app.delete("/books/deletebook", async (req, res) => {
  const response = await ctrl.deletebook(req, res);
  res.send(response);
});

app.delete("/books/deleteallbooks", async (req, res) => {
  const response = await ctrl.deleteallbooks(req, res);
  res.send(response);
});

app.listen(5001, () => console.log("Listen server open on port 5001"));