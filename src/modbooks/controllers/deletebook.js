const Book = require("../model");

const deleteBook = async (req, res) => {
  let response = {};
  try {
    const deletedBook = await Book.findOneAndDelete({ title: req.body.title });

    if (deletedBook) {
      response = {
        status: 201,
        properties: {
          message: "success",
          deletedBook: deletedBook
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

module.exports = deleteBook;