const passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth20').Strategy,
	mongoose = require('mongoose'),
	keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id); //user.id refers to mongodb's collection id. Now user.id = _id.$oid
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true, //traffic sets to http instead of https when run thru heroku proxy
		},
		async (err, accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({
				googleId: profile.id,
				displayName: profile.displayName,
				emails: profile._json.emails,
				name: `${profile.name.givenName} ${profile.name.familyName}`,
			}).save();
			done(null, user);
		}
	)
);
