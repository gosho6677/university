const GetCreateStudentController = require("../../controllers/studentControllers/GetCreateStudentController");
const Controller = require("../../core/Controller");

class GetCreateStudentRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/create/student', (req, res) => {
            new GetCreateStudentController().controller(req, res);
        });
    }
}

module.exports = GetCreateStudentRoute;