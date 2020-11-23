import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import RegisterPage from './RegisterPage';
import Home from './Home';

function Routes() {
	return (
		<div className="Routes">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/admin">
					<AdminPage />
				</Route>
				<Route exact path="/register">
					<RegisterPage />
				</Route>
			</Switch>
		</div>
	);
}

export default Routes;
