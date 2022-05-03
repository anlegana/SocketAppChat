import React from "react";

function Chat(props) {
	function renderUsers(user) {
		if (user.id === props.yourId) {
			return (
				<p key={user.id}>
					You :{user.username},{user.id},{props.yourId}
				</p>
			);
		} else {
			return (
				<p key={user.id}>
					{user.username},{user.id},{props.yourId}
				</p>
			);
		}
	}
	function handleKeyPress(e) {
		if (e.key == "Enter") {
			props.sendMessage();
		}
	}
	return (
		<div>
			<div className="chatSquare">
				{" "}
				<h1 className="chatTittle">Chat</h1>
			</div>
			<input
				placeholder="say somth"
				onKeyPress={handleKeyPress}
				onChange={props.messageHandleChange}
			/>
			<button>Send</button>
			{props.allUsers.map(renderUsers)}
		</div>
	);
}

export default Chat;
