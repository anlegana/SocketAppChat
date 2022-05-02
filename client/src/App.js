import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Chat from "./components/Chat";
function App() {
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState("");
	const [allUsers, setAllUsers] = useState([]);

	function UsernameHandleChange(e) {
		setUsername(e.target.value);
	}
	function connect() {
		setConnected(true);
		const socket = io();
		socket.emit("join server", username);
		console.log(username);
		socket.on("new user", (allUsers) => {
			setAllUsers(allUsers);
		});
	}
	useEffect(() => {
		console.log(allUsers);
	}, [allUsers]);
	let body;
	if (connected) {
		body = <Chat allUsers={allUsers} />;
	} else {
		body = (
			<div>
				<input placeholder="username..." onChange={UsernameHandleChange} />{" "}
				<button onClick={connect}>enter server</button>
			</div>
		);
	}
	return <div>{body}</div>;
}

export default App;
