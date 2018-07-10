import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>This will show signed in users their dashboard and info</h2>;
const SurveyNew = () => <h2>This page will show signed in users to do a new survey</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
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
	}
}

export default connect(
	null,
	actions
)(App);
