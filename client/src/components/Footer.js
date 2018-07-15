import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer-copyright cyan darken-2 black-text">
				<div style={{ textAlign: 'center' }} className="container">
					{' '}
					{/* <p style={{ fontSize: '1.3em' }}>Notitia - Age of Information</p> */}
					<p>
						Made with
						<i className="material-icons" style={{ fontSize: 'smaller' }}>
							{' '}
							favorite
						</i>{' '}
						by
						<a href="https://github.com/entofmd" className="black-text">
							{' '}
							EntOfMD{' '}
						</a>
						<br />
						<div>
							<p>
								2018 Claus & Co. All rights reserved. <br />Pricing subjected to change without notice.
								<br />
								<a className="black-text" href="/">
									Terms and Conditions
								</a>
							</p>
						</div>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
