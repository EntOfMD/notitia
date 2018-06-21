const passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth20').Strategy,
	keys = require('../config/keys');

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
