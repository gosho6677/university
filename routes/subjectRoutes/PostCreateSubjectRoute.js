const PostCreateSubjectController = require("../../controllers/subjectControllers/PostCreateSubjectController");
const Controller = require("../../core/Controller");

class PostCreateSubjectRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.post('/records/create/subject', (req, res) => {
            new PostCreateSubjectController().controller(req, res);
        });
    }
}

module.exports = PostCreateSubjectRoute;