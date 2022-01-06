const AllRecordsController = require("../controllers/AllRecordsController");
const Controller = require("../core/Controller");

class AllRecordsRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/', (req, res) => new AllRecordsController().controller(req, res));
    }
}

module.exports = AllRecordsRoute;