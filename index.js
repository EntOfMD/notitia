//module imports
const express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
const app = express();

//file imports
const keys = require('./config/keys'),
	config = require('./config');
// Passport
require('./models/User');
require('./services/passport'); //nothing is being imported, we just want the file to be run, so we don't need to assign it.
require('./routes/authRoutes')(app); //immediately pass the app thru the import

//middlewares, env, dev tools
app.use(morgan('dev'));
app.use(express.static(config.www));
app.use(config.www, express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database
mongoose.connect(
	keys.getDbConnectionString(),
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
