require("dotenv").config();
require("./db/connection");

const express = require("express");
const cors = require("cors");
const bookRouter = require("./modbooks/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bookRouter);

app.listen(5001, () => console.log("Listen server open on port 5001"));