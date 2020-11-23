import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import YodlrApi from './YodlrApi';
import RegisterPage from './RegisterPage';
import Admin from './UsersTable';
import Routes from './Routes';

function App() {
	console.debug('App Component - Start');
	return (
		<BrowserRouter>
			<Container className="App">
				<Routes />
			</Container>
		</BrowserRouter>
	);
}

export default App;
