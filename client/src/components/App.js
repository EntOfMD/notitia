import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Pricing from './Pricing';
import devDash from './devDash';
import Footer from './Footer';

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
						<Route path="/app/pricing" component={Pricing} />
						<Route exact path="/app/dev/dashboard" component={devDash} />
						<Footer />
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
