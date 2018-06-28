const mongoose = require('mongoose');
const { Schema } = mongoose; //Same as `const Schema = mongoose.Schema`

const userSchema = new Schema({
	googleId: { type: Number, unique: true, index: true },
	displayName: { type: String },
	name: [],
	emails: [],
	raw: [],
	gender: { type: String },
	profile: [],
});

mongoose.model('users', userSchema);
