const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: 'Purchase credits to send emails',
			source: req.body.id,
		});
		req.user.credits += charge.amount / 100;
		const user = await req.user.save();
		res.send(user);
	});
};
