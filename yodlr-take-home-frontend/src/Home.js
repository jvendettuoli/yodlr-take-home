import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	image    : {
		backgroundImage    :
			'url(https://images.unsplash.com/photo-1520631023082-a5fe1cf21c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
		backgroundPosition : 'center',
		backgroundSize     : 'cover',
		height             : '100vh'
	},
	titleBar : {
		display         : 'flex',
		flexDirection   : 'column',
		justifyContent  : 'space-around',
		alignItems      : 'center',
		backgroundColor : 'rgba(0,0,0,0.8)',
		marginTop       : '35vh',
		marginBottom    : '35vh'
	},
	title    : {
		color      : 'white',
		fontWeight : 'bold',
		textAlign  : 'center'
	},
	button   : {
		width : 200
	},
	link     : {
		color        : 'white',
		fontSize     : 16,
		marginTop    : 20,
		marginBottom : 20
	}
});

function Home() {
	const classes = useStyles();
	return (
		<Grid container className={classes.image}>
			<Grid item xs={12} className={classes.titleBar}>
				<Typography className={classes.title} variant="h1">
					Yodlr
				</Typography>
				<Button
					className={classes.button}
					size="large"
					variant="contained"
					component={RouterLink}
					to="/register"
				>
					Sign Up Here!
				</Button>
				<Link
					className={classes.link}
					component={RouterLink}
					to="/admin"
				>
					Admin Dashboard
				</Link>
			</Grid>
		</Grid>
	);
}
export default Home;
