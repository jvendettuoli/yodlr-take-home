import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import UserContext from './UserContext';
import RegisterForm from './RegisterForm';
import YodlerApi from './YodlrApi';

const useStyles = makeStyles({
	root    : {
		margin : 20
	},
	title   : {
		marginBottom : 15
	},
	divider : {
		marginBottom : 10
	}
});

function UserPage() {
	const classes = useStyles();
	const [ user, setUser ] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		async function getUser() {
			try {
				const user = await YodlerApi.getUser(id);
				setUser(user);
			} catch (e) {
				console.log(e);
			}
		}

		getUser();
	}, []);

	if (!user) {
		return (
			<Container>
				<Typography variant="h5">Loading...</Typography>
			</Container>
		);
	}

	const stateText = () => {
		if (user.state === 'pending') {
			return (
				<Typography display="inline" style={{ color: 'red' }}>
					{user.state}
				</Typography>
			);
		}
		else if (user.state === 'active') {
			return (
				<Typography display="inline" style={{ color: 'green' }}>
					{user.state}
				</Typography>
			);
		}
	};

	return (
		<Container className={classes.root}>
			<Typography
				className={classes.title}
				variant="h4"
				gutterBottom
			>
				Hello {user.firstName}!
			</Typography>
			<Divider className={classes.divider} />
			<Typography variant="h5">User Information</Typography>
			<Typography>ID: {user.id}</Typography>
			<Typography>First Name: {user.firstName}</Typography>
			<Typography>Last Name: {user.lastName}</Typography>
			<Typography>Email: {user.email}</Typography>
			<Typography>State: {stateText()}</Typography>
		</Container>
	);
}

export default UserPage;
