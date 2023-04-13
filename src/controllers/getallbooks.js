const Book = require("../modbooks/model");

const getAllBooks = async (req, res) => {
  try {
    const bookList = await Book.find({});
    
    const successResponse = {
      status: 200,
      properties: {
        books: bookList
      }
    }

    return successResponse;
  } catch (error) {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = getAllBooks;