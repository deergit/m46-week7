const Book = require("../model");

const updateBookAuthor = async (req, res) => {
  let response = {};
  try {
    const updatedBook = await Book.findOneAndUpdate({ title: req.body.title }, { $set: { [req.body.key]: req.body.value }}, { new: true });

    if (updatedBook) {
      response = {
        status: 201,
        properties: {
          message: "success",
          updatedBook: updatedBook
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

module.exports = updateBookAuthor;