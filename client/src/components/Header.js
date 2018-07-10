import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null: //waiting for the connection
				return;
			case false: //user is NOT logged in
				return (
					<li>
						<a className="deep-orange darken-4 waves-effect waves-light btn" href="/auth/google">
							<i className="material-icons left">enhanced_encryption</i>Login with Google
						</a>
					</li>
				);
			default:
				//user logged in
				return (
					<li>
						<a className="indigo waves-effect waves-light btn" href="/api/logout">
							<i className="material-icons left">exit_to_app</i>Logout
						</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper cyan darken-2">
					<a className="center brand-logo" href="/">
						Notitia
					</a>
					<ul className="left">
						<li>
							<a href="/">Home</a>
						</li>
					</ul>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
