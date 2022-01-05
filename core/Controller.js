const router = require('express').Router();

class Controller {
    get(...rest) {
        return router.get(...rest);
        // return router.get(...arguments)
    }

    post(...rest) {
        return router.post(...rest);
    }

    all(...rest) {
        return router.all(...rest);
    }
}

module.exports = Controller;