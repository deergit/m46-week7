const Book = require("../modbooks/model");

const deleteAllBooks = async (req, res) => {
  try {
    await Book.deleteMany({});

    const successResponse = {
      status: 200,
    }

    return successResponse
  } catch {
    return 400
  }
}

module.exports = deleteAllBooks;