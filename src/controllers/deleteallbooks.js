const Book = require("../modbooks/model");

const deleteAllBooks = async (req, res) => {
  try {
    await Book.deleteMany({});

    const successResponse = {
      status: 201,
      properties: {
        message: "all books successfully deleted"
      }
    }

    return successResponse
  } catch {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = deleteAllBooks;