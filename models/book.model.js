const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    authorName: {
      type: String,
    },
    publicationYear: {
      type: Number,
    },
    ISBN: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: null,
    },
    reviews: [
      {
        users: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
        },
        rating: {
          rating: Number,
          min: 1,
          max: 5,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
