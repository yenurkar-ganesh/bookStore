const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
  getABook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

router.route("/").get(getAllBooks);
router.route("/").post(createBook);
router.route("/:id").get(getABook);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

module.exports = router;
