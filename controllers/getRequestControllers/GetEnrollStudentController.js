const View = require("../../core/View");
const StudentService = require("../../services/StudentService");
const SubjectService = require("../../services/SubjectService");

class GetEnrollStudentController {
    constructor() {
        this.studentService = new StudentService();
        this.subjectService = new SubjectService();
        this.view = new View();
    }

    async controller(req, res) {
        let studentId = req.params.studentId;
        let [row] = await this.studentService.getById(studentId);
        let [row1] = await this.subjectService.getAvailableSubjects(studentId);
        
        this.view.render(res, 'enrollStudent', { student: row[0], subjects: row1 });
    }
}

module.exports = GetEnrollStudentController;