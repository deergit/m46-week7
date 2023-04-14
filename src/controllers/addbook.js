const Book = require("../modbooks/model");

const addBook = async (req) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });

    const successResponse = {
      status: 201,
      properties: {
        message: "book successfully added",
        newBook: newBook
      }
    }

    return successResponse
  } catch (error) {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = addBook;