const hbs = require('express-handlebars');
const express = require('express');

class Module {
    constructor(app) {
        this.app = app;
    }

    template() {
        this.app.engine('.hbs', hbs.engine({
            extname: '.hbs'
        }));

        this.app.set('view engine', '.hbs');
    }

    bodyParser() {
        this.app.use(express.urlencoded({ extended: false }));
    }

    assets() {
        this.app.use('/static', express.static('static'));
    }
}

module.exports = Module;