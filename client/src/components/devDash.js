import React, { Component } from 'react';

class devDash extends Component {
	render() {
		return [
			<div className="divider" />,
			<div className="section">
				<div className="row">
					<div className="col s6">
						Manage Credits: <br />
						<div class="input-field col s6">
							<input id="email" type="text" class="validate" />
							<label class="active" for="email">
								Type the email:
							</label>
							<button className="btn-small" type="button" onClick="">
								Submit
							</button>
						</div>
					</div>
					<div className="col s6">test2</div>
				</div>
			</div>,
		];
	}
}

export default devDash;
