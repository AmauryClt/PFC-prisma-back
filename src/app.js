const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());

app.use(router);

const server = app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:5000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);

module.exports = app;
