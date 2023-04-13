const Book = require("../modbooks/model");

const updateBookAuthor = async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate({ title: req.body.title }, { $set: { author: req.body.author }}, { new: true });

    const successResponse = {
      message: "success",
      updatedBook: updatedBook
    }

    return successResponse
  } catch (error) {
    return 400;
  }
}

module.exports = updateBookAuthor;