const Book = require("../modbooks/model");

const updateBook = async (req, res) => {
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

      const successResponse = {
        status: 201,
        properties: {
          message: "success",
          updatedBook: updatedBook
        }
      }

      return successResponse;
    } else {
      return {
        status: 404,
        properties: {
          error: "could not find entry"
        }
      }
    }
  } catch {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = updateBook;