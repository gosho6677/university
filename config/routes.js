const homeController = require('../controllers/homeController');

module.exports = app => {
    app.use('/', homeController);
    // app.use('/students')
    // app.use('/teachers')
    // app.use('/subjects')
};