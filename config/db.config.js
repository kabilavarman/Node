module.exports = {
	HOST: 'localhost',

	USER: 'root',

	PASSWORD: 'welcome@123',

	DB: 'employee',

	dialect: 'mysql',

	pool: {
		max: 5,

		min: 0,

		acquire: 30000,

		idle: 10000,
	},
};
