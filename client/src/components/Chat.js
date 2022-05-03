import React from "react";
import "./styles/Chat.css";
function Chat(props) {
	function renderUsers(user) {
		if (user.id === props.yourId) {
			return <p key={user.id}>You :{user.username}</p>;
		} else {
			return <p key={user.id}>{user.username}</p>;
		}
	}
	function renderMessages(message) {
		console.log(message);
		return (
			<div>
				<h3>{message.content}</h3>
				<h5>{message.sender}</h5>
			</div>
		);
	}
	function handleKeyPress(e) {
		if (e.key === "Enter") {
			props.sendMessage();
		}
	}
	return (
		<div className="chatSquare">
			<div>
				{" "}
				<h1 className="chatTittle">Chat</h1>
			</div>
			<input
				placeholder="say somth"
				onKeyPress={handleKeyPress}
				onChange={props.messageHandleChange}
				value={props.message}
			/>
			<button>Send</button>

			{props.allUsers.map(renderUsers)}
			{props.allMessages.map(renderMessages)}
		</div>
	);
}

export default Chat;
