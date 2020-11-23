import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';
import UsersTable from './UsersTable';

function Home() {
	return (
		<Grid item className="Home">
			<Typography>HomePage</Typography>
		</Grid>
	);
}
export default Home;
