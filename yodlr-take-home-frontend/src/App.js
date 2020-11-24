import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import UserContext from './UserContext';

function App() {
	console.debug('App Component - Start');

	const [ currentUser, setCurrentUser ] = useState(null);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<div className="App">
					<Routes />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
