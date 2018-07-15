const passport = require('passport');

module.exports = app => {
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/app/dashboard');
	});

	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/app/dev', (req, res) => {
		if (req.user) {
			res.send('/app/dev/dashboard');
		} else {
			return res.status(403).send({ error: 'You must be logged in' }), res.redirect('/');
		}
	});
};
