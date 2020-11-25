import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';

function UsersTable({ users, setSelectedRows }) {
	console.debug('UserTable Component - Start');

	users = users.map((user) => ({ ...user, link: `/users/${user.id}` }));

	console.log('USRS', users);
	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First Name', width: 150 },
		{ field: 'lastName', headerName: 'Last Name', width: 150 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'state', headerName: 'State', width: 120 },
		{
			field      : 'link',
			headerName : 'User Page',
			width      : 150,
			renderCell : (params) => (
				<Link
					style={{ zIndex: 1 }}
					component={RouterLink}
					to={params.value}
				>
					Link
				</Link>
			)
		}
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
