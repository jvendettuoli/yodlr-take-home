import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';
import UsersTable from './UsersTable';

function AdminPage() {
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

	const usersLoaded = () => {
		if (users) {
			return <UsersTable users={users} />;
		}
		else return <div>LOADING...</div>;
	};

	return (
		<Grid item className="AdminPage">
			<Typography>Yodlr Admin</Typography>
			<Grid item>
				<Typography>Users</Typography>
				{usersLoaded()}
			</Grid>
		</Grid>
	);
}
export default AdminPage;
