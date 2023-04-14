require("dotenv").config();
require("./db/connection");

const express = require("express");
const ctrl = require("./controllers/controller")

const app = express();

app.use(express.json());

app.get("/books/getallbooks", async (req, res) => {
  const response = await ctrl.getallbooks();
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.get("/books/getbook", async (req, res) => {
  const response = await ctrl.getbook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.post("/books/addbook", async (req, res) => {
  const response = await ctrl.addbook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.put("/books/updatebookauthor", async (req, res) => {
  const response = await ctrl.updatebookauthor(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.put("/books/updatebookmichael", async (req, res) => {
  const response = await ctrl.updatebookmichael(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.put("/books/updatebook", async (req, res) => {
  const response = await ctrl.updatebook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.delete("/books/deletebook", async (req, res) => {
  const response = await ctrl.deletebook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.delete("/books/deleteallbooks", async (req, res) => {
  const response = await ctrl.deleteallbooks();
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

app.listen(5001, () => console.log("Listen server open on port 5001"));