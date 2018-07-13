// next is what we call when the middleware is complete
module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(403).send({ error: 'You must be logged in' }), res.redirect('/');
	}
	next();
};
