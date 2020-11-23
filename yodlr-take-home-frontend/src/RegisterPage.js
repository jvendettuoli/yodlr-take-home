import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import YodlrApi from './YodlrApi';
import RegisterForm from './RegisterForm';

function RegisterPage() {
	return (
		<Container className="RegisterPage">
			<Typography>Register</Typography>
			<RegisterForm />
		</Container>
	);
}

export default RegisterPage;
