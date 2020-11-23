import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import YodlrApi from './YodlrApi';
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
