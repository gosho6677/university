const View = require("../../core/View");
const StudentService = require("../../services/StudentService");

class GetStudentsAndCreditsController {
    constructor() {
        this.studentService = new StudentService();
        this.view = new View();
    }

    async controller(req, res) {
        let [rows] = await this.studentService.getAllWithCredits();
        
        this.view.render(res, 'studentsAndCredits', { students: rows });
    }
}

module.exports = GetStudentsAndCreditsController;