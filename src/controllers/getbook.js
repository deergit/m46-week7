const Book = require("../modbooks/model");

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.query.title });
    
    if (book) {
      const successResponse = {
        status: 200,
        properties: {
          message: "success",
          book: book
        }
      }

      return successResponse;
    } else {
      return 404;
    }
  } catch (error) {
    return 400;
  }
}

module.exports = getBook;