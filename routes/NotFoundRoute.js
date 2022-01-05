const Controller = require("../core/Controller");
const View = require("../core/View");

class NotFoundRoute extends Controller {
    constructor() {
        super();
        this.view = new View();
    }

    route() {
        return super.all('*', (req, res) => {
            this.view.render(res, 'notFound');
        });
    }
}

module.exports = NotFoundRoute;