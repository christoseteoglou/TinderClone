import React from 'react';
import './Chat.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatMessages({ name, message, profilePic, timestamp }) {
	return (
		<div className="chat">
			{profilePic ? (
				<div style={{ backgroundImage: `url("${profilePic}")` }} className="chat__profileImage" />
			) : (
				<AccountCircleIcon fontSize="large" />
			)}

			<div className="chat__details">
				<h2>{name}</h2>
				<p>{message}</p>
			</div>
			<p className="chat__timestamp">{timestamp}</p>
		</div>
	);
}

export default ChatMessages;
