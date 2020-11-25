import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RegisterForm from './RegisterForm';

const useStyles = makeStyles({
	container : {
		padding : 15
	}
});

function RegisterPage() {
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Grid item xs={1}>
				<Typography
					variant="h2"
					gutterBottom
					align="center"
					display="inline"
				>
					<Link component={RouterLink} to="/">
						<ArrowBackIcon
							style={{ color: 'black' }}
							fontSize="large"
						/>
					</Link>
				</Typography>
			</Grid>
			<Grid item xs={11}>
				<Typography gutterBottom variant="h2" align="center">
					Register User
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<RegisterForm isAdmin={false} />
			</Grid>
		</Grid>
	);
}

export default RegisterPage;
