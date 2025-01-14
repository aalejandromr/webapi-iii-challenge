const express = require("express");

const server = express();

const router = require("./users/userRouter");

const userRouter = require("./posts/postRouter");

server.use(express.json());

server.use(logger);

server.use("/api/users", router);

server.use("/api/posts", userRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `METHOD: ${req.method} => URL: ${
      req.url
    } => TIME: ${new Date().toISOString()}`
  );
  next();
}

module.exports = server;
