import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./styles/Chat.css";
function Chat(props) {
	function renderUsers(user) {
		if (user.id === props.yourId) {
			return <p key={user.id}>You :{user.username}</p>;
		}
	}
	function renderMessages(message) {
		console.log(message);
		return (
			<div className="messageStyle">
				<div className={message.sender === props.username ? "you" : "other"}>
					<h3>{message.content}</h3>
				</div>
				<h5
					className={
						message.sender === props.username ? "senderYou" : "senderOther"
					}
				>
					{message.sender}
				</h5>
			</div>
		);
	}
	function handleKeyPress(e) {
		if (e.key === "Enter") {
			props.sendMessage();
		}
	}
	return (
		<div className="chat">
			<div>
				{" "}
				<h1 className="chatTittle">Chat</h1>
			</div>
			<div>
				<p>{props.allUsers.map(renderUsers)}</p>
			</div>
			<ScrollToBottom className="messageContainer">
				<div>
					<p>{props.allMessages.map(renderMessages)}</p>
				</div>
			</ScrollToBottom>
			<input
				placeholder="say somth"
				onKeyPress={handleKeyPress}
				onChange={props.messageHandleChange}
				value={props.message}
			/>
			<button>Send</button>
		</div>
	);
}

export default Chat;
