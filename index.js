const express = require('express');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');
const dbConnection = require('./config/database');
const app = express();

expressConfig(app);
routesConfig(app);

app.listen(5000, () => console.log('Server listening on http://localhost:5000/'));