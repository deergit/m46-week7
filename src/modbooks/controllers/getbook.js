const Book = require("../model");

const getBook = async (req, res) => {
  let response = {};
  try {
    const book = await Book.findOne({ title: req.body.title });
    
    if (book) {
      response = {
        status: 200,
        properties: {
          message: "success",
          book: book
        }
      }
    } else {
      response = {
        status: 404,
        properties: {
          error: "could not find entry"
        }
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

module.exports = getBook;