const express = require("express");

const db = require("./userDb");

const router = express.Router();

function validateUserId(req, res, next) {
  console.log(req.params.id);
  db.getById(req.params.id)
    .then(user => {
      if (req.params.id && user) {
        // console.log(user);
        req.user = user; // I think this is where the error is comming from
        return next();
        // return res.json(db.getById(req.params.id));
      }
      res.json(400).json({
        message: "User not found with provided id"
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  // next();
}
function validateUser(req, res, next) {
  if (req.body) {
    if (req.body.name) {
      return next();
    } else {
      return res.status(400).json({
        message: "missing required name field"
      });
    }
  }
  return res.status(400).json({
    message: "missing user data"
  });
}

router.post("/", (req, res) => {});

router.post("/:id/posts", validateUserId, validateUser, (req, res) => {});

router.get("/", (req, res) => {
  res.json(db.get());
});

router.get("/:id", validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.get("/:id/posts", validateUserId, (req, res) => {});

router.delete("/:id", validateUserId, (req, res) => {});

router.put("/:id", validateUserId, (req, res) => {});

//custom middleware

module.exports = router;
