const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: { 
        type: String, 
        required: true,
        
      },
    description: { 
        type: String 
    },
  },
  { timestamps: true }
);
