const View = require("../../core/View");
const TeacherService = require("../../services/TeacherService");

class PostCreateTeacherController {
    constructor() {
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let { title, first_name, last_name } = req.body;

        try {
            await this.teacherService.addOne(title, first_name, last_name);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            this.view.render(res, 'createTeacher', { error: err });
        }
    }
}

module.exports = PostCreateTeacherController;