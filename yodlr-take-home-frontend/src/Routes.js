import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import RegisterPage from './RegisterPage';
import Home from './Home';
import UserPage from './UserPage';

function Routes() {
	return (
		<div className="Routes">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/users/:id">
					<UserPage />
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
