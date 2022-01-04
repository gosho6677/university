const GetStudentsAndDisciplinesController = require("../controllers/getRequestControllers/GetStudentsAndDisciplinesController");
const Controller = require("../core/Controller");

class GetStudentsAndDisciplinesRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.get('/records/students-and-disciplines', (req, res) => {
            new GetStudentsAndDisciplinesController().controller(req, res);
        });
    }
}

module.exports = GetStudentsAndDisciplinesRoute;