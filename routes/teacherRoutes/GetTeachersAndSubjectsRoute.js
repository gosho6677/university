const GetTeachersAndSubjectsController = require("../../controllers/teacherControllers/GetTeachersAndSubjectsController");
const Controller = require("../../core/Controller");

class GetTeachersAndSubjectsRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/teachers-and-subjects', (req, res) => {
            new GetTeachersAndSubjectsController().controller(req, res);
        });
    }
}

module.exports = GetTeachersAndSubjectsRoute;