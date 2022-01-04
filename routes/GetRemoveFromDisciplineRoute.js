const GetRemoveFromDisciplineController = require("../controllers/getRequestControllers/GetRemoveFromDisciplineController");
const Controller = require("../core/Controller");

class GetRemoveFromDisciplineRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/remove-from-discipline/:studentId', (req, res) => {
            new GetRemoveFromDisciplineController().controller(req, res);
        });
    }
}

module.exports = GetRemoveFromDisciplineRoute;