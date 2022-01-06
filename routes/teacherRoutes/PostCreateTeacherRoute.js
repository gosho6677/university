const PostCreateTeacherController = require("../../controllers/teacherControllers/PostCreateTeacherController");
const Controller = require("../../core/Controller");

class PostCreateTeacherRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.post('/records/create/teacher', (req, res) => {
            new PostCreateTeacherController().controller(req, res);
        });
    }
}

module.exports = PostCreateTeacherRoute;