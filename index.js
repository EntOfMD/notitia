//module imports
const express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieSession = require('cookie-session'),
	passport = require('passport');
const app = express();

//file imports
const keys = require('./config/keys'),
	config = require('./config');

//middlewares, env, dev tools
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //a month in milliseconds
		keys: [keys.cookieKey],
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); //make sure passport.initilize and .session are ABOVE the routes.
app.use(passport.session());
app.use(express.static(config.www));

// Passport
require('./models/User');
require('./services/passport'); //nothing is being imported, we just want the file to be run, so we don't need to assign it.
require('./routes/authRoutes')(app); //immediately pass the app thru the import
require('./routes/billingRoutes')(app);

//database
mongoose.connect(
	keys.getDbConnectionString(),
	{ useNewUrlParser: true },
	err => {
		if (err) throw err;
		console.log(`Successfully connected to database.`);
	}
);

app.listen(config.PORT, err => {
	if (err) throw err;
	var date = new Date();
	date.setTime(Date.now());
	console.log(`${date.toLocaleTimeString()}\nServing on ${config.www}\nListening on port ${config.PORT}`);
});
