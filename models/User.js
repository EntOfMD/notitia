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
	credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);
