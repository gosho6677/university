const View = require("../../core/View");

class GetCreateTeacherController {
    constructor() {
        this.view = new View();
    }

    async controller(req, res) {
        return this.view.render(res, 'createTeacher');
    }
}

module.exports = GetCreateTeacherController;