const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
db.sequelize.sync();
const app = express();

var corsOptions = {
	origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Node application.' });
});
require('./routes/employee.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
//
