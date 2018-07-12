import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Notitia - Age of Information"
				description="Thank you for your purchase"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_PK}
			>
				<button
					className="waves-effect waves-light btn-large "
					style={{ borderRadius: '4px', backgroundColor: '#00a711' }}
				>
					{' '}
					<i
						className="material-icons left"
						style={{ marginRight: 5, marginBottom: 'inherit', marginTop: '-4px' }}
					>
						playlist_add
					</i>add credits
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(
	null,
	actions
)(Payments);
