const View = require("../../core/View");
const StudentService = require("../../services/StudentService");

class GetStudentsAndDisciplinesController {
    constructor() {
        this.studentService = new StudentService();
        this.view = new View();
    }

    async controller(req, res) {
        let [rows] = await this.studentService.getAllWithDisciplines();

        this.view.render(res, 'studentsAndDisciplines', { students: rows });
    }
}

module.exports = GetStudentsAndDisciplinesController;