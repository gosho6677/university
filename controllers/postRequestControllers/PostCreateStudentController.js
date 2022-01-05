const View = require("../../core/View");
const Student = require("../../models/Student");
const StudentService = require("../../services/StudentService");

class PostCreateStudentController {
    constructor() {
        this.studentService = new StudentService();
        this.view = new View();
    }

    async controller(req, res) {
        let { first_name, last_name, year_in_college } = req.body;
        try {
            let student = new Student(first_name, last_name, Number(year_in_college));

            await this.studentService.addOne(student);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            this.view.render(res, 'createStudent', { error: err });
        }
    }
}

module.exports = PostCreateStudentController;