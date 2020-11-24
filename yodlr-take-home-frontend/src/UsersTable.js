import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

function UsersTable({ users, setSelectedRows }) {
	console.debug('UserTable Component - Start');

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First Name', width: 150 },
		{ field: 'lastName', headerName: 'Last Name', width: 150 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'state', headerName: 'State', width: 120 }
	];

	const handleChange = (evt) => {
		setSelectedRows(evt.rowIds);
	};

	return (
		<DataGrid
			rows={users}
			columns={columns}
			pageSize={10}
			checkboxSelection
			autoHeight
			onSelectionChange={handleChange}
		/>
	);
}
export default React.memo(UsersTable);
