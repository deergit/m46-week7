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
      return {
        status: 404,
        properties: {
          error: "could not find entry"
        }
      }
    }
  } catch (error) {
    return {
      status: 400,
      properties: {
        error: "could not perform operation"
      }
    }
  }
}

module.exports = getBook;