// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const API_KEY = process.env.REACT_APP_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: 'tinder-clone-effe7.firebaseapp.com',
	projectId: 'tinder-clone-effe7',
	storageBucket: 'tinder-clone-effe7.appspot.com',
	messagingSenderId: '432262078016',
	appId: '1:432262078016:web:60cd3e8bbb4650d77789a5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
