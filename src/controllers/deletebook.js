const Book = require("../modbooks/model");

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ title: req.query.title });

    const successResponse = {
      message: "successfully deleted",
      deletedBook: deletedBook
    }

    res.status(201).json(successResponse);
  } catch {
    res.sendStatus(400);
  }
}

module.exports = deleteBook;