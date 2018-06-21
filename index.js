const express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose');

const app = express(),
	PORT = process.env.PORT || 3000,
	www = process.env.WWW || './';

passportConfig = require('./services/passport'); //nothing is being imported, we just want the file to be run, so we don't need to assign it.
require('./routes/authRoutes')(app); //immediately use the import

app.use(morgan('dev'));
app.use(express.static(www));

console.log(`serving ${www}`);
app.listen(PORT, err => {
	if (err) throw err;
	console.log(`listening on http://localhost:${PORT}`);
});
