const View = require("../../core/View");
const TeacherService = require("../../services/TeacherService");

class GetTopThreeTeachersController {
    constructor() {
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let [rows] = await this.teacherService.getTopThree();

        this.view.render(res, 'topThreeTeachers', { teachers: rows });
    }
}

module.exports = GetTopThreeTeachersController;