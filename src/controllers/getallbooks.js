const Book = require("../modbooks/model");

const getAllBooks = async (req) => {
  try {
    const bookList = await Book.find({});
    
    const successResponse = {
      status: 200,
      properties: {
        message: "success",
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