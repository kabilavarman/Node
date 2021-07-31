module.exports = (sequelize, Sequelize) => {
	const Tutorial = sequelize.define('employee', {
		name: {
			type: Sequelize.STRING,
		},

		description: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.STRING,
		},
		mobileNo: {
			type: Sequelize.BIGINT,
		},
		active: {
			type: Sequelize.BOOLEAN,
		},
	});

	return Tutorial;
};
