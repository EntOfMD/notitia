const mongoose = require('mongoose');
const { Schema } = mongoose; //Same as `const Schema = mongoose.Schema`

const userSchema = new Schema({
	signupDate: { type: Date },
	googleId: { type: Number },
	displayName: { type: String },
	name: [],
	emails: [],
	credits: { type: Number, default: 0 },
	role: { type: String, default: 'consumer' },
});

mongoose.model('users', userSchema);
