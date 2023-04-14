const { Router } = require("express");
const bookRouter = Router();

const ctrl = require("./controllers/controller");

bookRouter.get("/books/getallbooks", ctrl.getallbooks);

bookRouter.get("/books/getbook", ctrl.getbook);

bookRouter.post("/books/addbook", ctrl.addbook);

bookRouter.put("/books/updatebookauthor", ctrl.updatebookauthor);

bookRouter.put("/books/updatebookmichael", ctrl.updatebookmichael);

bookRouter.put("/books/updatebook", ctrl.updatebook);

bookRouter.delete("/books/deletebook", ctrl.deletebook);

bookRouter.delete("/books/deleteallbooks", ctrl.deleteallbooks);

module.exports = bookRouter;