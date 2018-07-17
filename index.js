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
//nothing is being imported, we just want the file parsed, so we don't need to assign it.
require('./models/User');
require('./models/Admins');
require('./models/Survey');
require('./services/passport');
require('./routes/authRoutes')(app); //immediately pass the app thru the import
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	console.log(`Running on Production`);

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//database
mongoose.connect(
	keys.getDbConnectionString(),
	{ useNewUrlParser: true },
	err => {
		if (err) {
			throw err;
		} else {
			console.log(`Successfully connected to database.`);
		}
	}
);

app.listen(config.PORT, err => {
	if (err) {
		throw err;
	} else {
		var date = new Date();
		date.setTime(Date.now());
		console.log(`${date.toLocaleTimeString()}\nListening on port ${config.PORT}`);
	}
});
