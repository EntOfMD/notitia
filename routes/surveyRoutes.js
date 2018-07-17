const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
	app.post('/api/surveys', { requireLogin, requireCredits }, (req, res) => {
		const { title, subject, body, recipients } = req.body;

		/* 
		ES6 syntax for identical key:value
        */
		const survey = new Survey({
			title,
			body,
			subject,
			recipients: recipients.split(',').map(email => ({
				email,
			})),
			_user: req.user.id, //id is _id in mongo
			dateSent: Date.now(),
		});
	});
};
