const Book = require("../model");

const getAllBooks = async (req, res) => {
  let response = {};
  try {
    const bookList = await Book.find({});
    
    response = {
      status: 200,
      properties: {
        message: "success",
        books: bookList
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

module.exports = getAllBooks;