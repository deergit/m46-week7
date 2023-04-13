const Book = require("../modbooks/model");

const updateBook = async (req, res) => {
  try {
    const match = await Book.findOne({ title: req.query.title });
    const updatedBook = {
      _id: match.id,
      title: req.body.title ?? match.title,
      author: req.body.author ?? match.author,
      genre: req.body.genre ?? match.genre,
      __v: match.__v
    }

    await Book.replaceOne(match, updatedBook, { upsert: false });

    const successResponse = {
      status: 200,
      updatedBook: updatedBook
    }

    return successResponse
  } catch {
    return 400
  }
}

module.exports = updateBook;