const db = require('../models');
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({
			message: 'name can not be empty!',
		});
		return;
	}
	// Create a Employee
	const employee = {
		name: req.body.name,
		role: req.body.role,

		mobileNo: req.body.mobileNo,

		description: req.body.description,
		active: req.body.active ? req.body.active : false,
	};

	// Save Tutorial in the database
	Employee.create(employee)
		.then((data) => {
			res.send({ status: 200, data });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while creating the employee.',
			});
		});
};
exports.findAll = (req, res) => {
	// const title = req.query.title;
	// var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Employee.findAll()
		.then((data) => {
			res.send({ status: 200, data });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving Employee.',
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;

	Employee.findByPk(id)
		.then((data) => {
			res.send({ status: 200, data });
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Employee with id=' + id,
			});
		});
};
exports.update = (req, res) => {
	const id = req.params.id;

	Employee.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Employee was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Employee with id=' + id,
			});
		});
};
exports.delete = (req, res) => {
	const id = req.params.id;

	Employee.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Employee was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Employee with id=' + id,
			});
		});
};
