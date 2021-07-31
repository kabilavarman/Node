module.exports = (app) => {
	const employee = require('../contollers/employee.controller');

	var router = require('express').Router();

	// Create a new employee
	router.post('/save', employee.create);

	// Retrieve all employee
	router.get('/', employee.findAll);

	// // Retrieve a single employee with id
	router.get('/:id', employee.findOne);

	// // Update a employee with id
	router.put('/save/:id', employee.update);

	// // Delete a employee with id
	router.delete('/:id', employee.delete);

	app.use('/api/employee', router);
};
