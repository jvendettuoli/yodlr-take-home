import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import RegisterForm from './RegisterForm';

const useStyles = makeStyles({
	title : {
		marginBottom : 15
	}
});

function RegisterPage() {
	const classes = useStyles();

	return (
		<Container className="RegisterPage">
			<Typography className={classes.title} variant="h2">
				Register User
			</Typography>
			<RegisterForm />
		</Container>
	);
}

export default RegisterPage;
