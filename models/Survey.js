const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
	title: { type: String },
	body: { type: String },
	subject: { type: String },
	recipients: [String],
});

mongoose.model('surveys', surveySchema);
