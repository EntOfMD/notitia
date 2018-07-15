const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
	googleId: { type: Number },
	displayName: { type: String },
	name: [],
	email: [],
	role: { type: String, default: 'Proxenos' },
	lastLogin: { type: Date },
	lastLogout: { type: Date },
	currentTask: { type: String },
	startDate: { type: Date },
});

mongoose.model('admins', adminSchema);
