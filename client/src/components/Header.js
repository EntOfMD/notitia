import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper cyan darken-2">
					<a className="center brand-logo">Notitia - Age of Information</a>
					<ul className="left hide-on-med-and-down">
						<li>
							<a href="/">Home</a>
						</li>
					</ul>
					<ul className="right hide-on-med-and-down ">
						<li>
							<a href="">Hello: Ash Ketchum</a>
						</li>
						<li>
							<a className="deep-orange darken-4" href="/auth/google">
								Login with Google
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
