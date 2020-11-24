import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';

import YodlrApi from './YodlrApi';
import RegisterForm from './RegisterForm';
import UsersTable from './UsersTable';

const useStyles = makeStyles({
	title        : {
		backgroundColor : '#004285',
		color           : 'white'
	},
	users        : {
		margin : 20
	},
	buttons      : {
		display        : 'flex',
		justifyContent : 'space-around',
		marginTop      : 10,
		marginBottom   : 10
	},
	registerForm : {
		margin : 10
	}
});

function AdminPage() {
	console.debug('AdminPage Component - Start');

	const classes = useStyles();

	const [ users, setUsers ] = useState();
	const [ usersUpToDate, setUsersUpToDate ] = useState(false);
	const [ showRegisterForm, setShowRegisterForm ] = useState(false);

	useEffect(
		() => {
			if (!usersUpToDate) {
				async function getUsers() {
					try {
						let users = await YodlrApi.getUsers();
						setUsers(users);
						console.log('USERS', users);
					} catch (err) {
						setUsers(null);
						console.log(err);
					}

					setUsersUpToDate(true);
				}
				getUsers();
			}
		},
		[ usersUpToDate ]
	);

	const usersLoaded = () => {
		if (users) {
			return <UsersTable users={users} />;
		}
		else return <div>LOADING...</div>;
	};

	const registerUserForm = () => {
		if (showRegisterForm) {
			return (
				<Grid item xs={12} className={classes.registerForm}>
					<RegisterForm setUsersUpToDate={setUsersUpToDate} />
				</Grid>
			);
		}
	};

	const handleToggle = () => {
		setShowRegisterForm(!showRegisterForm);
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
			<Grid item container xs={12} className={classes.users}>
				<Grid item xs={12}>
					<Typography variant="h4">Users</Typography>
				</Grid>
				<Grid container item xs={12} className={classes.buttons}>
					<Grid item xs={3}>
						<Button variant="contained" onClick={handleToggle}>
							Register a New User
						</Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="contained" color="primary">
							Activate Selected Users
						</Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="contained" color="secondary">
							Delete Selected Users
						</Button>
					</Grid>
				</Grid>
				{registerUserForm()}
				<Grid item xs={12}>
					{usersLoaded()}
				</Grid>
			</Grid>
		</Grid>
	);
}
export default AdminPage;
