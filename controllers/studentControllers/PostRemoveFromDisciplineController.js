const StudentService = require("../../services/StudentService");

class PostRemoveFromDisciplineController {
    constructor() {
        this.studentService = new StudentService();
    }

    async controller(req, res) {
        let studentId = req.params.studentId;
        let disciplineId = req.body.disciplineId;

        try {
            await this.studentService.removeFromDiscipline(studentId, disciplineId);
            res.redirect('/records/students-and-disciplines');
        } catch (err) {
            console.error(err);
            res.redirect('/records/students-and-disciplines');
        }
    }
}

module.exports = PostRemoveFromDisciplineController;