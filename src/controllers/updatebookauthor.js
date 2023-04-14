const Book = require("../modbooks/model");

const updateBookAuthor = async (req) => {
  try {
    const updatedBook = await Book.findOneAndUpdate({ title: req.body.title }, { $set: { author: req.body.author }}, { new: true });

    if (updatedBook) {
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
  } catch (error) {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = updateBookAuthor;