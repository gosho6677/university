const GetMostEnrolledSubjectsController = require("../controllers/getRequestControllers/GetMostEnrolledSubjectsController");
const Controller = require("../core/Controller");

class GetMostEnrolledSubjectsRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/most-enrolled-subjects', (req, res) => {
            new GetMostEnrolledSubjectsController().controller(req, res);
        });
    }
}

module.exports = GetMostEnrolledSubjectsRoute;