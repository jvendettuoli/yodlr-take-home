import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import YodlrApi from './YodlrApi';

function RegisterForm() {
	const [ formData, setFormData ] = useState({
		firstName : '',
		lastName  : '',
		email     : ''
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormData((fData) => ({
			...fData,
			[name] : value
		}));
		console.log('formdata', formData);
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const type = evt.target.name;

		try {
			const user = await YodlrApi.createUser(formData);
			console.log('USER', user);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form
			className="RegisterForm"
			name="register"
			onSubmit={handleSubmit}
		>
			<TextField
				id="firstName"
				name="firstName"
				label="First Name"
				placeholder="Yodel"
				InputLabelProps={{
					shrink : true
				}}
				onChange={handleChange}
				autoComplete="given-name"
			/>
			<TextField
				id="lastName"
				name="lastName"
				label="Last Name"
				placeholder="Ay-Hee-Hoo"
				InputLabelProps={{
					shrink : true
				}}
				onChange={handleChange}
				autoComplete="family-name"
			/>
			<TextField
				id="email"
				name="email"
				label="Email"
				placeholder="yodel@gmail.com"
				InputLabelProps={{
					shrink : true
				}}
				onChange={handleChange}
				autoComplete="email"
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
			>
				Register
			</Button>
		</form>
	);
}

export default RegisterForm;
