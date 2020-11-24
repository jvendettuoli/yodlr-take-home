import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

	const [ users, setUsers ] = useState([]);
	const [ selectedRows, setSelectedRows ] = useState([]);
	const [ usersUpToDate, setUsersUpToDate ] = useState(false);
	const [ showRegisterForm, setShowRegisterForm ] = useState(false);

	useEffect(
		() => {
			if (!usersUpToDate) {
				async function getUsers() {
					try {
						let users = await YodlrApi.getUsers();
						setUsers(users);
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
		if (usersUpToDate) {
			return (
				<UsersTable
					users={users}
					setSelectedRows={setSelectedRows}
				/>
			);
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

	const handleToggleForm = () => {
		setShowRegisterForm(!showRegisterForm);
	};

	const handleDelete = () => {
		selectedRows.forEach(async (userId) => {
			try {
				await YodlrApi.deleteUser(userId);
			} catch (e) {
				console.log(
					`Error while attempting to delete user ${userId}: ${e}`
				);
			}
		});
		setUsersUpToDate(false);
	};

	const handleActivate = () => {
		selectedRows.forEach(async (userId) => {
			try {
				let user = users.filter((user) => user.id == userId);
				user[0].state = 'active';
				await YodlrApi.updateUser(userId, user[0]);
			} catch (e) {
				console.log(
					`Error while attempting to update user ${userId}: ${e}`
				);
			}
		});
		setUsersUpToDate(false);
	};

	return (
		<Grid container className="AdminPage" style={{ height: '100%' }}>
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
			<Grid container item xs={12} className={classes.users}>
				<Grid item xs={12}>
					<Typography variant="h4">Users</Typography>
				</Grid>
				<Grid container item xs={12} className={classes.buttons}>
					<Grid item xs={3}>
						<Button
							variant="contained"
							onClick={handleToggleForm}
						>
							Register a New User
						</Button>
					</Grid>
					<Grid item xs={3}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleActivate}
						>
							Activate Selected Users
						</Button>
					</Grid>
					<Grid item xs={3}>
						<Button
							variant="contained"
							color="secondary"
							onClick={handleDelete}
						>
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
