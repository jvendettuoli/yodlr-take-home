import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';
import UsersTable from './UsersTable';

const useStyles = makeStyles({
	image  : {
		backgroundImage    :
			'url(https://images.unsplash.com/photo-1520631023082-a5fe1cf21c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
		backgroundPosition : 'center',
		backgroundSize     : 'cover',
		height             : '100vh',
		backgroundColor    : '#225c00'
	},
	title  : {
		display         : 'flex',
		flexDirection   : 'column',
		justifyContent  : 'center',
		alignItems      : 'center',
		color           : 'white',
		fontWeight      : 'bold',
		textAlign       : 'center',
		marginTop       : '40vh',
		paddingBottom   : 15,
		backgroundColor : 'rgba(0,0,0,0.8)'
	},
	button : {
		width : 200
	}
});

function Home() {
	const classes = useStyles();
	return (
		<Grid container className={classes.image}>
			<Grid item xs={12} className={classes.titleGrid}>
				<Typography className={classes.title} variant="h1">
					Yodlr
					<Button
						className={classes.button}
						variant="contained"
						component={RouterLink}
						to="/register"
					>
						Sign Up Here!
					</Button>
				</Typography>
			</Grid>
		</Grid>
	);
}
export default Home;
