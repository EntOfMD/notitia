const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  mongoose = require('mongoose'),
  keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log(
    `serialized ${user.name} with gid:${user.googleId} and _id:${user.id}`
  );

  done(null, user.id); //user.id refers to mongodb's collection id. Now user.id = _id.$oid
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    console.log(`deserialized ID: ${id} for ${user.name} `);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (err, accessToken, refreshToken, profile, done) => {
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
          console.log('user exist');
          done(null, existingUser);
        } else {
          // if user does NOT exist, do this
          console.log('user DOESNT exist');
          new User({
            googleId: profile.id,
            raw: profile._raw,
            displayName: profile.displayName,
            emails: profile._json.emails,
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            gender: profile._json.gender || profile.gender,
            profile: profile._json
          })
            .save()
            .then(user => done(null, user))
            .catch(error => {
              console.log(error);
            });
        }
      });
    }
  )
);
