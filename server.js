const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const data = require("./data");

const hostname = "127.0.0.1";
const port = 3005;

const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
