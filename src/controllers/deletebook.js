const Book = require("../modbooks/model");

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ title: req.query.title });

    if (deletedBook) {
      const successResponse = {
        status: 201,
        properties: {
          message: "success",
          deletedBook: deletedBook
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

module.exports = deleteBook;