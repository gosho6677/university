const PostEnrollStudentController = require("../controllers/postRequestControllers/PostEnrollStudentController");
const Controller = require("../core/Controller");

class PostEnrollStudentRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.post('/enroll-to-discipline/:studentId', (req, res) => {
            new PostEnrollStudentController().controller(req, res);
        });
    }
}

module.exports = PostEnrollStudentRoute;