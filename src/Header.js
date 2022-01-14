import React from 'react';
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';

function Header() {
	return (
		// BEM
		<div className="header">
			<IconButton>
				<PersonIcon className="header__icon" fontSize="large" />
			</IconButton>
			<img
				className="header__logo"
				src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
				alt="tinder logo"
			/>
			<IconButton>
				<QuestionAnswerIcon className="header__icon" fontSize="large" />
			</IconButton>
		</div>
	);
}

export default Header;
