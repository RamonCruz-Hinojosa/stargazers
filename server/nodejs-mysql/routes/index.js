var express = require("express");
var router = express.Router();
const user = require("../services/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Express" });
});

router.post("/login", async function (req, res, next) {
  try {
    res.json(await user.login(req));
  } catch (err) {
    console.error(`Error while logging in `, err.message);
    next(err);
  }
});

module.exports = router;
