import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null: //waiting for the connection
				return;
			case false: //user is NOT logged in
				return [
					<li key="403">
						<a
							className="deep-orange darken-4 waves-effect waves-light btn"
							style={{ borderRadius: '4px' }}
							href="/auth/google"
						>
							<i className="material-icons left">enhanced_encryption</i>
							<span>Login with Google</span>
						</a>
					</li>,
				];
			default:
				//user logged in
				return [
					<li key="3" style={{ margin: '0 20px', fontWeight: '900', fontSize: '1.1em' }}>
						Credits: <span className="red-text">{this.props.auth.credits}</span>
					</li>,
					<li key="1">
						<Payments />
					</li>,
					<li key="2">
						<a
							className=" waves-effect waves-light btn"
							style={{ borderRadius: '4px', backgroundColor: '#0800a7' }}
							href="/api/logout"
						>
							<i className="material-icons left" style={{ marginRight: 5 }}>
								exit_to_app
							</i>Logout
						</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper cyan darken-2">
					{/*color is either #0097a7 or cyan with darken-2  */}
					<Link to={this.props.auth ? '/app/dashboard' : '/'} className="center brand-logo">
						Notitia
					</Link>
					<ul className="left">
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/app/pricing'}>Pricing</Link>
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
