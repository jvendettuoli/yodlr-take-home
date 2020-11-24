import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import YodlrApi from './YodlrApi';

const useStyles = makeStyles({
	form : {
		display       : 'flex',
		flexDirection : 'column',
		'& div'       : {
			marginBottom : 10
		}
	}
});

function RegisterForm({ setUsersUpToDate }) {
	const classes = useStyles();
	const initialFormData = {
		firstName : '',
		lastName  : '',
		email     : ''
	};
	const [ formData, setFormData ] = useState(initialFormData);

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormData((fData) => ({
			...fData,
			[name] : value
		}));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			await YodlrApi.createUser(formData);
			setFormData(initialFormData);
			setUsersUpToDate(false);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form
			className={classes.form}
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
				value={formData.firstName}
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
				value={formData.lastName}
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
				value={formData.email}
				autoComplete="email"
			/>
			<Button type="submit" variant="contained" fullWidth>
				Register
			</Button>
		</form>
	);
}

export default RegisterForm;
