const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const URLModel = mongoose.model("Url", URLSchema);
module.exports = { URLModel };
