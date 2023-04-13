const Book = require("../modbooks/model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });

    const successResponse = {
      status: 200,
      newBook: newBook
    }

    return successResponse
  } catch (error) {
    return 400;
  }
}

module.exports = addBook;