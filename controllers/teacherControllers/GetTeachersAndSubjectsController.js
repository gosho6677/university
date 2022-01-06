const View = require("../../core/View");
const TeacherService = require("../../services/TeacherService");

class GetTeachersAndSubjectsController {
    constructor() {
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let [rows] = await this.teacherService.getWithSubjects();
        let teachers = [];

        for(let current of rows) {
            let exists = teachers.find(t => t.full_name === current.full_name);

            if(exists) {
                exists.subjects.push(`${current.name}: ${current.total_enrolled_students}`);
            } else {
                teachers.push({
                    full_name: current.full_name,
                    subjects: [`${current.name}: ${current.total_enrolled_students}`]
                });
            }
        }
        
        this.view.render(res, 'teachersAndSubjects', { teachers });
    }
}

module.exports = GetTeachersAndSubjectsController;