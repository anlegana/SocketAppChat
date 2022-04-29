const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//app.get("/", (req, res) => {
//  res.send("<h1>Hola</h1>");
//});
let users = [];
io.on("connection", (socket) => {
	console.log("conneted user");
});

server.listen(3066, () => {
	console.log("listening on *:3066");
});
