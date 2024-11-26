const router = require("express").Router();
const { URLModel } = require("../models/url.model");

router.post("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const url = await URLModel.findOne({
      urlCode: code,
    });
    if (url) {
      console.log(url);
      return res.json({ url });
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
