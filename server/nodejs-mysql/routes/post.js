const express = require("express");
const router = express.Router();
const post = require("../services/post");


router.get("/", async function (req, res, next) {
  try {
    res.json(await post.list(req));
  } catch (err) {
    console.error(`Error while getting post `, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await post.get(req));
  } catch (err) {
    console.error(`Error while getting post by ID `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await post.create(req));
  } catch (err) {
    console.error(`Error while creating post `, err.message);
    next(err);
  }
});

router.patch("/", async function (req, res, next) {
  try {
    res.json(await post.update(req));
  } catch (err) {
    console.error(`Error while updating post `, err.message);
    next(err);
  }
});

module.exports = router;
