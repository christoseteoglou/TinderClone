import React from 'react';
import { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@mui/material';

function ChatScreen() {
	const [ input, setInput ] = useState('');
	const [ messages, setMessages ] = useState([
		{
			name: 'Yesimagirrrl',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrf7HPjENMI_YsTCfst5pcK8tnp1VuWzYIasHIq7kWISdeb3aOfywUDB6TRwAtGYQ7RQc&usqp=CAU',
			message: 'Whats up ♥'
		},
		{
			name: 'Yesimagirrrl',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrf7HPjENMI_YsTCfst5pcK8tnp1VuWzYIasHIq7kWISdeb3aOfywUDB6TRwAtGYQ7RQc&usqp=CAU',
			message: 'Hows it going!'
		},
		{
			message: 'Hi! How are you old lady?'
		}
	]);

	const handleSend = (e) => {
		e.preventDefault();

		setMessages([ ...messages, { message: input } ]);
		setInput('');
	};

	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">YOU MATCHED WITH YESIMAGIRRL ON 16/01/22</p>
			{messages.map(
				(message) =>
					message.name ? (
						<div className="chatScreen__message">
							<Avatar className="chatScreen__image" alt={message.name} src={message.image} />
							<p className="chatScreen__text"> {message.message} </p>
						</div>
					) : (
						<div className="chatScreen__message">
							<p className="chatScreen__textUser"> {message.message} </p>
						</div>
					)
			)}

			<form className="chatScreen__input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="chatScreen__inputField"
					placeholder="Type a message..."
					type="text"
				/>
				<button onClick={handleSend} type="submit" className="chatScreen__inputButton">
					SEND
				</button>
			</form>
		</div>
	);
}

export default ChatScreen;
