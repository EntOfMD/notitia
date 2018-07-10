const passport = require('passport');

module.exports = app => {
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		// console.log(req.user);
		res.redirect('/');
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
		let name = req.user.name;
		req.logout();
		console.log(`${name} has been logged out!`);
		res.redirect('/');
	});
};
