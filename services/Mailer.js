const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
require('@sendgrid/helpers');
class Mailer extends sgMail.MailService {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sgMail.setApiKey(keys.sendGridKey);
		this.from_email = new sgMail.setEmail('no-reply@notitia.com');
		this.subject = subject;
		this.body = new sgMail.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}
	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new sgMail.Email(email);
		});
	}

	addClickTracking() {
		const trackingSettings = new sgMail.trackingSettings();
		const clickTracking = new sgMail.clickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new sgMail.Personalization();

		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = await this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON(),
		});
		const response = this.sgApi.API(request);
		return response;
	}
}

// const survey = {title:'test', subject:'test subject', recipient:'ashellz2010@gmail.com', body:'test body'};

module.exports = Mailer;
