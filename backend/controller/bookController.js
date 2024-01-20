import { Book } from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    // const response = await axios.get(
    //   "https://www.googleapis.com/books/v1/volumes?q=quilting"
    // );
    // const bookData = response.data.items; // Assuming the book data is in the 'items' property

    // Save each book to MongoDB if it doesn't already exist
    // for (const book of bookData) {
    //   const existingBook = await Book.findOne({ title: book.volumeInfo.title });

    //   if (!existingBook) {
    //     const newBook = {
    //       title: book.volumeInfo.title,
    //       author: book.volumeInfo.authors
    //         ? book.volumeInfo.authors.join(", ")
    //         : "Unknown",
    //       publishYear: book.volumeInfo.publishedDate
    //         ? new Date(book.volumeInfo.publishedDate).getFullYear()
    //         : null,
    //     };

    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const newbook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await new Book(newbook);
    book.save();
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};
