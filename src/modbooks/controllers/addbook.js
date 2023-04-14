const Book = require("../model");

const addBook = async (req, res) => {
  let response = {};
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });

    response = {
      status: 201,
      properties: {
        message: "book successfully added",
        newBook: newBook
      }
    }
  } catch (error) {
    response = {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
  res.status(response.status).json(response.properties);
}

module.exports = addBook;