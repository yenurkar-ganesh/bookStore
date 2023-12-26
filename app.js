console.log("Book Store");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200;
const cors = require('cors')

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Book Store");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
