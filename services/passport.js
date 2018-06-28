const passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth20').Strategy,
	mongoose = require('mongoose'),
	keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				/* 	const rEmail = [];
				profile.emails.map(obj => {
					for (var x = 0; x <= rEmail.length; x++) {
						rEmail[x][obj.value] = obj.type;
						console.log(rEmail);
					}
				}); */

				if (existingUser) {
					// if user does exist, do
					done(null, existingUser);
				} else {
					// if user does NOT exist, do this
					new User({
						googleId: profile.id,
						raw: profile._raw,
						displayName: profile.displayName,
						emails: profile.emails,
						name: profile.name,
						gender: profile.gender,
						profile: profile,
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
