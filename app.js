const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200;
const cors = require("cors");
const connectDB = require('./DB/connectToDB.js')

// MIDDLEWARE
app.use(cors());
require("dotenv").config();
app.use(express.json());

// CONNECTION TO DB 
connectDB();

// ROUTES 
app.use("/api/books", require('./routes/book.route.js'));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
