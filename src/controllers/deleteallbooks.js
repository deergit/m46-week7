const Book = require("../modbooks/model");

const deleteAllBooks = async (req, res) => {
  try {
    await Book.deleteMany({});

    const successResponse = {
      message: "successfully deleted all books"
    }

    res.status(201).json(successResponse);
  } catch {
    res.sendStatus(400);
  }
}

module.exports = deleteAllBooks;