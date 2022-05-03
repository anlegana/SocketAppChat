import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Chat from "./components/Chat";
const socket = io.connect("http://localhost:3066");
function App() {
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState("");
	const [allUsers, setAllUsers] = useState([]);
	const [message, setMessage] = useState("");

	function usernameHandleChange(e) {
		setUsername(e.target.value);
	}
	function messageHandleChange(e) {
		setMessage(e.target.value);
	}
	function sendMessage() {
		const payload = {
			content: message,
			sender: username,
		};
		socket.on("");
	}
	function connect() {
		setConnected(true);
		socket.emit("join chat", username);
		console.log(username);
		socket.on("new user", (allUsers) => {
			setAllUsers(allUsers);
		});
		console.log(allUsers);
	}

	let body;
	if (connected) {
		body = (
			<Chat
				allUsers={allUsers}
				yourId={socket.id}
				message={message}
				sendMessage={sendMessage}
				messageHandleChange={messageHandleChange}
			/>
		);
	} else {
		body = (
			<div>
				<input placeholder="username..." onChange={usernameHandleChange} />{" "}
				<button onClick={connect}>enter server</button>
			</div>
		);
	}
	return <div>{body}</div>;
}

export default App;
