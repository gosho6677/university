const StudentService = require('../../services/StudentService');
const TeacherService = require('../../services/TeacherService');
const View = require('../../core/View');

class AllRecordsController {
    constructor() {
        this.studentService = new StudentService();
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let [students, teachers] = await Promise
            .all([this.studentService.getAll(), this.teacherService.getAllWithTaughtSubjects()]);
        
        this.view.render(res, 'allRecords', { students: students[0], teachers: teachers[0] });
    }
}

module.exports = AllRecordsController;