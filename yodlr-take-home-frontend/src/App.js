import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';
import Admin from './Admin';

function App() {
	const [ users, setUsers ] = useState();
	useEffect(() => {
		async function getUsers() {
			try {
				let users = await YodlrApi.getUsers();
				setUsers(users);
				console.log('USERS', users);
			} catch (err) {
				setUsers(null);
				console.log(err);
			}
		}
		getUsers();
	}, []);

	const adminShow = () => {
		if (users) {
			return <Admin users={users} />;
		}
		else return <div>LOADING...</div>;
	};

	console.log('users oouter', users);
	return (
		<Container className="App">
			<Typography>Yodlr</Typography>
			<Register />
			{adminShow()}
		</Container>
	);
}

export default App;
