import express from "express";

import {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBookById,
} from "../controller/bookController.js";

export const router = express.Router();

router.post("/addBook", addBook);
router.get("/getAllBooks", getAllBooks);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
router.get("/getBookById/:id", getBookById);
