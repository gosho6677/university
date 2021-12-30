const PostCreateStudentController = require("../controllers/postRequestControllers/PostCreateStudentController");
const Controller = require("../core/Controller");

class PostCreateStudentRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.post('/records/create/student', (req, res) => {
            new PostCreateStudentController().controller(req, res);
        });
    }
}

module.exports = PostCreateStudentRoute;