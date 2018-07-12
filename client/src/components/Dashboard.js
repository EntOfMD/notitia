import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h3>Dashboard info:</h3>
				<h5>You can only see this page when you're logged in</h5>
			</div>
		);
	}
}

export default Dashboard;
