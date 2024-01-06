var express = require("express");
var dotenv = require("dotenv");
const colors = require("colors");
var socket = require("socket.io");

var socketConnection = require("./socket/socket");
//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow.bold));

const io = socket(server);

socketConnection(io);
