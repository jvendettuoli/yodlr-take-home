import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';
import UsersTable from './UsersTable';

const useStyles = makeStyles({
	title : {
		backgroundColor : '#004285',
		color           : 'white'
	},
	table : {
		margin : 20
	}
});

function AdminPage() {
	const classes = useStyles();

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
		<Grid container className="AdminPage">
			<Grid item xs={12}>
				<Typography
					className={classes.title}
					variant="h2"
					align="center"
					gutterBottom
				>
					Admin Dashboard
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.table}>
				<Typography variant="h4">Users</Typography>
				{usersLoaded()}
			</Grid>
		</Grid>
	);
}
export default AdminPage;
