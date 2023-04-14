const Book = require("../model");

const updateBook = async (req, res) => {
  let response = {};
  try {
    const match = await Book.findOne({ title: req.query.title });
    if (match) {
      const updatedBook = {
        _id: match.id,
        title: req.body.title ?? match.title,
        author: req.body.author ?? match.author,
        genre: req.body.genre ?? match.genre,
        __v: match.__v
      }

      await Book.replaceOne(match, updatedBook, { upsert: false });

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

module.exports = updateBook;