const express = require("express");

const db = require("./userDb");

const router = express.Router();

function validateUserId(req, res, next) {
  const user = db.getById(req.params.id);
  if (id && user) {
    req.user = user;
    return next();
  }
  res.status(400).json({
    message: "invalid user id"
  });
}

router.post("/", (req, res) => {});

router.post("/:id/posts", validateUserId, (req, res) => {});

router.get("/", (req, res) => {});

router.get("/:id", validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
