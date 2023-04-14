const Book = require("../model");

const deleteAllBooks = async (req, res) => {
  let response = {};
  try {
    await Book.deleteMany({});

    response = {
      status: 201,
      properties: {
        message: "all books successfully deleted"
      }
    }
  } catch {
    response = {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
  res.status(response.status).json(response.properties);
}

module.exports = deleteAllBooks;