const StudentService = require("../../services/StudentService");

class PostEnrollStudentController {
    constructor() {
        this.studentService = new StudentService();
    }

    async controller(req, res) {
        let studentId = req.params.studentId;
        let disciplineId = req.body.disciplineId;

        try {
            await this.studentService.enrollToDiscipline(studentId, disciplineId);
            res.redirect('/records/students-and-disciplines');
        } catch (err) {
            console.error(err);
            res.redirect('/records/students-and-disciplines');
        }
    }
}

module.exports = PostEnrollStudentController;