const express = require('express'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth20').Strategy,
	keys = require('./config/keys'),
	app = express(),
	PORT = process.env.PORT || 3000,
	www = process.env.WWW || './',
	morgan = require('morgan');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(`${accessToken}`);
			console.log(`${refreshToken}`);
			console.log(profile);
		}
	)
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

app.use(morgan('dev'));
app.use(express.static(www));
console.log(`serving ${www}`);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
