const View = require("../../core/View");
const Teacher = require("../../models/Teacher");
const TeacherService = require("../../services/TeacherService");

class PostCreateTeacherController {
    constructor() {
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let { title, first_name, last_name } = req.body;

        try {
            const teacher = new Teacher(title, first_name, last_name);
            await this.teacherService.addOne(teacher);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            this.view.render(res, 'createTeacher', { error: err });
        }
    }
}

module.exports = PostCreateTeacherController;