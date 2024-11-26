const router = require("express").Router();
const { URLModel } = require("../models/url.model");

router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    // Find and update the `updatedAt` field
    const url = await URLModel.findOneAndUpdate(
      { urlCode: code },
      { $set: { updatedAt: new Date() } }, // Update only `updatedAt`
      { new: false } // Return the original document
    );

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
