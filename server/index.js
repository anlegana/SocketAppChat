const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);

//app.get("/", (req, res) => {
//  res.send("<h1>Hola</h1>");
//});
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});
let users = [];
let messages = [];
io.on("connection", (socket) => {
	console.log("conneted user");
	socket.on("join chat", (username) => {
		const user = {
			username,
			id: socket.id,
		};
		users.push(user);
		io.emit("new user", users);
		io.emit("new message", messages);
	});
	socket.on("new message", ({ content, sender }) => {
		console.log("new message");
		const payload = {
			content,
			sender,
		};
		console.log(payload.content);
		messages.push(payload);

		io.emit("new message", messages);
	});
	socket.on("disconnect", () => {
		console.log("disconneted user");
		users = users.filter((u) => u.id !== socket.id);
		io.emit("new user", users);
	});
});

server.listen(3066, () => {
	console.log("listening on *:3066");
});
