require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 4000; // for heroku configs

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
