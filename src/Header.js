import React from 'react';
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';

import { NavLink } from 'react-router-dom';

function Header() {
	return (
		// BEM
		<div className="header">
			<IconButton>
				<PersonIcon className="header__icon" fontSize="large" />
			</IconButton>

			<NavLink to="/">
				<img
					className="header__logo"
					src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
					alt="tinder logo"
				/>
			</NavLink>

			<NavLink to="/chats">
				<IconButton>
					<QuestionAnswerIcon className="header__icon" fontSize="large" />
				</IconButton>
			</NavLink>
		</div>
	);
}

export default Header;
