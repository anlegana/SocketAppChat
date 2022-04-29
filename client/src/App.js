import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { io } from "socket.io-client";

function App() {
	function connect() {
		const socket = io();
		//  socket.emit("connection");
	}

	return (
		<div>
			<button onClick={connect}>enter server</button>
		</div>
	);
}

export default App;
