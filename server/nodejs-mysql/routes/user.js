const express = require("express");
const router = express.Router();
const user = require("../services/user");

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await user.get(req));
  } catch (err) {
    console.error(`Error while getting user by ID `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await user.create(req));
  } catch (err) {
    console.error(`Error while creating user `, err.message);
    next(err);
  }
});

module.exports = router;
