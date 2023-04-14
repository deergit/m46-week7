const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("../controllers/controller");

bookRouter.get("/books/getallbooks", async (req, res) => {
  const response = await ctrl.getallbooks();
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.get("/books/getbook", async (req, res) => {
  const response = await ctrl.getbook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.post("/books/addbook", async (req, res) => {
  const response = await ctrl.addbook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.put("/books/updatebookauthor", async (req, res) => {
  const response = await ctrl.updatebookauthor(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.put("/books/updatebookmichael", async (req, res) => {
  const response = await ctrl.updatebookmichael(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.put("/books/updatebook", async (req, res) => {
  const response = await ctrl.updatebook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.delete("/books/deletebook", async (req, res) => {
  const response = await ctrl.deletebook(req);
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

bookRouter.delete("/books/deleteallbooks", async (req, res) => {
  const response = await ctrl.deleteallbooks();
  parseInt(response) ? res.status(response) : res.status(response.status).json(response.properties);
});

module.exports = bookRouter;