const recordsController = require('../controllers/recordsController');

module.exports = app => {
    app.get('/', (req, res) => res.redirect('/records'));
    app.use('/records', recordsController);
    // app.use('/students')
    // app.use('/teachers')
    // app.use('/subjects')
};