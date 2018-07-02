const mongoose = require('mongoose');
const { Schema } = mongoose; //Same as `const Schema = mongoose.Schema`

const userSchema = new Schema({
	googleId: { type: Number },
	displayName: { type: String },
	name: [],
	emails: [],
	raw: [],
	gender: [],
	profile: [],
});

mongoose.model('users', userSchema);
