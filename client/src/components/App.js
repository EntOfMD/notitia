import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>This will show signed in users their dashboard and info</h2>;
const SurveyNew = () => <h2>This page will show signed in users to do a new survey</h2>;
const Landing = () => <h2>Landing Page! this will include sales pitch and data</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/app" component={Dashboard} />
					<Route path="/app/dashboard" component={Dashboard} />
					<Route path="/app/survey/new" component={SurveyNew} />
					<Route exact path="/app/survey" component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
