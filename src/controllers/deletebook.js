const Book = require("../modbooks/model");

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ title: req.query.title });

    const successResponse = {
      status: 200,
      deletedBook: deletedBook
    }

    return successResponse
  } catch {
    return 400
  }
}

module.exports = deleteBook;