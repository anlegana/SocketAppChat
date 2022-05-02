import React from "react";

function Chat(props) {
	function renderUsers(allUsers) {
		return <p key={allUsers.id}>{allUsers.username}</p>;
	}
	return <div>{props.allUsers.map(renderUsers)}</div>;
}

export default Chat;
