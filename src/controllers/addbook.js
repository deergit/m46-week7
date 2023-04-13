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

    res.status(201).json(successResponse);
  } catch (error) {
    return 400;
  }
}

module.exports = addBook;