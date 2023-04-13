const Book = require("../modbooks/model");

const getAllBooks = async (req, res) => {
  try {
    const bookList = await Book.find({});
    
    const successResponse = {
      status: 200,
      books: bookList
    }

    return successResponse;
  } catch (error) {
    return 400;
  }
}

module.exports = getAllBooks;