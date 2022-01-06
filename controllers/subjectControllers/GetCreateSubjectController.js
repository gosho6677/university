const View = require("../../core/View");
const TeacherService = require("../../services/TeacherService");

class GetCreateSubjectController {
    constructor() {
        this.view = new View();
        this.teacherService = new TeacherService();
    }

    async controller(req, res) {
        let [rows] = await this.teacherService.getAll();
        
        this.view.render(res, 'createSubject', { teachers: rows });
    }
}

module.exports = GetCreateSubjectController;