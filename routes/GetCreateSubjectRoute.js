const GetCreateSubjectController = require("../controllers/getRequestControllers/GetCreateSubjectController");
const Controller = require("../core/Controller");

class GetCreateSubjectRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/create/subject', (req, res) => {
            new GetCreateSubjectController().controller(req, res);
        });
    }
}

module.exports = GetCreateSubjectRoute;