import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import YodlrApi from './YodlrApi';
import Register from './RegisterPage';

function UsersTable({ users }) {
	console.log('USERS UsersTable', users);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First Name', width: 150 },
		{ field: 'lastName', headerName: 'Last Name', width: 150 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'state', headerName: 'State', width: 120 }
	];

	console.log('columns', columns);
	return (
		<DataGrid
			rows={users}
			columns={columns}
			pageSize={10}
			checkboxSelection
			autoHeight
		/>
	);
}
export default UsersTable;
