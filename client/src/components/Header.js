import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="center brand-logo">Notitia - Age of Information</a>
					<ul className="left hide-on-med-and-down">
						<li>
							<a href="/">Home</a>
						</li>
					</ul>
					<ul className="right hide-on-med-and-down">
						<li>
							<a href="/auth/google">Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
