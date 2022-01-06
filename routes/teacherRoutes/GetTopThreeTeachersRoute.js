const GetTopThreeTeachersController = require("../../controllers/teacherControllers/GetTopThreeTeachersController");
const Controller = require("../../core/Controller");

class GetTopThreeTeachersRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/top-three-teachers', (req, res) => {
            new GetTopThreeTeachersController().controller(req, res);
        });
    }
}

module.exports = GetTopThreeTeachersRoute;