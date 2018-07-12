import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer-copyright cyan darken-2 black-text">
				<div style={{ textAlign: 'center' }} className="container">
					{'This is the footer'}
					<p style={{ fontSize: '1.3em' }}>Notitia - Age of Information</p>
					<p>
						2018 Made with
						<i className="material-icons" style={{ fontSize: 'smaller' }}>
							{' '}
							favorite
						</i>{' '}
						by
						<a href="https://github.com/entofmd" className="black-text">
							{' '}
							EntOfMD{' '}
						</a>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
