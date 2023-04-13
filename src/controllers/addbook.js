const Book = require("../modbooks/model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });

    const successResponse = {
      message: "success",
      newBook: newBook
    }

    return successResponse
  } catch (error) {
    return 400;
  }
}

module.exports = addBook;