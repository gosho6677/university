const GetCreateTeacherController = require("../../controllers/teacherControllers/GetCreateTeacherController");
const Controller = require("../../core/Controller");

class GetCreateTeacherRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/create/teacher', (req, res) => {
            new GetCreateTeacherController().controller(req, res);
        });
    }
}

module.exports = GetCreateTeacherRoute;