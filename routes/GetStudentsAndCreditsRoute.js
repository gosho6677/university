const GetStudentsAndCreditsController = require("../controllers/getRequestControllers/GetStudentsAndCreditsController");
const Controller = require("../core/Controller");

class GetStudentsAndCreditsRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/students-and-credits', (req, res) => {
            new GetStudentsAndCreditsController().controller(req, res);
        });
    }
}

module.exports = GetStudentsAndCreditsRoute;