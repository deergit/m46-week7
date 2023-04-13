const Book = require("../modbooks/model");

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.query.title });
    
    const successResponse = {
      message: "success",
      book: book
    }

    res.status(200).json(successResponse);
  } catch (error) {
    return 400;
  }
}

module.exports = getBook;