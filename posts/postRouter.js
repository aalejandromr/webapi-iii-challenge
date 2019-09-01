const express = require("express");

const db = require("./postDb");

const router = express.Router();

function validatePost(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      message: "missing post data"
    });
  }

  if (!req.body.text) {
    return res.status(400).json({
      message: "missing requried text field"
    });
  }

  next();
}

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", validatePost, (req, res) => {
  db.insert({ text: req.body.text })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
