const View = require("../../core/View");

class GetCreateStudentController {
    constructor() {
        this.view = new View();
    }

    async controller(req, res) {
        return this.view.render(res, 'createStudent');
    }
}

module.exports = GetCreateStudentController;