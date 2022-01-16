import React from 'react';
import ChatMessages from './ChatMessages';

function Chat() {
	return (
		<div className="chats">
			<ChatMessages
				name="Yesimagirrrl"
				message=" Whats up ♥"
				timestamp="35 minutes ago"
				profilePic="https://i.quotev.com/img/q/u/18/5/11/bfo4itrh6f.jpg"
			/>
			<ChatMessages
				name="Co Co Calle"
				message=" Chriiiiiiiistooooooooos"
				timestamp="55 minutes ago"
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3sh0hgG05V2DlZL8jiQb1ysd3vtqGOQZWQ&usqp=CAU"
			/>
			<ChatMessages
				name="Whipper"
				message=" Hey dude, have you seen this ?..."
				timestamp="3 days ago"
				profilePic="https://farm7.staticflickr.com/6009/5890008317_1e6a6dee82_z.jpg"
			/>
			<ChatMessages
				name="Kaiser"
				message=" Fucking Karen dude..."
				timestamp="1 week ago"
				profilePic="https://i.imgflip.com/24uth3.jpg"
			/>
			<ChatMessages
				name="Marcus"
				message=" EEEYYYYY... broooooooor!!"
				timestamp="69 days ago"
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmJdIklB1tMEzMwwverN7-TYZpiwKnv8AgQ&usqp=CAU"
			/>
		</div>
	);
}

export default Chat;
