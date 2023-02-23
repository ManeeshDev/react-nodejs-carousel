module.exports = (app) => {
	const carousels = require('../controllers/carousel.controller.js');
	const router = require('express').Router();

	router.get('/', carousels.getAll);

	app.use('/api/carousel', router);
};
