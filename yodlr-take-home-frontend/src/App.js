import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App() {
	console.debug('App Component - Start');
	return (
		<BrowserRouter>
			<div className="App">
				<Routes />
			</div>
		</BrowserRouter>
	);
}

export default App;
