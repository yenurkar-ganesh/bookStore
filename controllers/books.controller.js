const express = require("express");
const asyncHandler = require("express-async-handler");

// GET || ALL BOOKS
// @route /api/books
const getAllBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `All books` });
});

// POST || Create Book
// @route /api/books
const createBook = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Book Created Successfully` });
});

// GET || GEY A BOOKS
// @route /api/books/id
const getABook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Book whose id : ${req.params.id} ` });
});

// PUT || UPDATE A DETAILS
// @route /api/books/id
const updateBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update successfully for ${req.params.id}` });
});

// DELETE || DELETE A DETAILS
// @route /api/books/id
const deleteBook = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Book Delete successfully for ${req.params.id}` });
});

module.exports = { getAllBooks, createBook, getABook, updateBook, deleteBook };
