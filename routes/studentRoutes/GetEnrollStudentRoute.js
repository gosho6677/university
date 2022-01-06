const GetEnrollStudentController = require("../../controllers/studentControllers/GetEnrollStudentController");
const Controller = require("../../core/Controller");

class GetEnrollStudentRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/enroll-to-discipline/:studentId', (req, res) => {
            new GetEnrollStudentController().controller(req, res);
        });
    }
}

module.exports = GetEnrollStudentRoute;