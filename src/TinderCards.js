import React from 'react';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function TinderCards() {
	const [ people, setPeople ] = useState([]);
	const usersCollectionRef = collection(db, 'people');

	// Piece of code which runs based on the condition
	useEffect(() => {
		const getPeople = async () => {
			const data = await getDocs(usersCollectionRef);

			setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPeople();
	}, []);

	return (
		<div>
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard className="swipe" key={person.id} preventSwipe={[ 'up', 'down' ]}>
						<div style={{ backgroundImage: `url(${person.url})` }} className="card">
							<h3>
								{' '}
								{person.name}, &nbsp; {person.age}{' '}
							</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;

// BAD WAY!!! USCH!
// const people = [];
// people.push('cat', 'glue')

// GOOD WAY
// setpeople([...people, 'catbutt', 'glueButt'])
