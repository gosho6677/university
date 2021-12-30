const express = require('express');
const app = express();
const Module = require('./config/Module');
const Route = require('./core/Route');
// const routesConfig = require('./config/routes');

// expressConfig(app);
class App extends Route {
    init() {
        const module = new Module(app);
        module.assets();
        module.template();
        module.bodyParser();
        require('./config/database');

        // initialize routes from parent
        app.use(super.init());
        // routesConfig(app);

        app.listen(5000, () => console.log('Server listening on http://localhost:5000/'));
    }
}

// start the app
new App().init();
