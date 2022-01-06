const PostRemoveFromDisciplineController = require("../../controllers/studentControllers/PostRemoveFromDisciplineController");
const Controller = require("../../core/Controller");

class PostRemoveFromDisciplineRoute extends Controller {
    constructor() {
        super();
    }

    route() {
        return super.post('/remove-from-discipline/:studentId', (req, res) => {
            new PostRemoveFromDisciplineController().controller(req, res);
        });
    }
}

module.exports = PostRemoveFromDisciplineRoute;