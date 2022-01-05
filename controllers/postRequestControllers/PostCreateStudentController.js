const View = require("../../core/View");
const StudentService = require("../../services/StudentService");

class PostCreateStudentController {
    constructor() {
        this.studentService = new StudentService();
        this.view = new View();
    }

    async controller(req, res) {
        let { first_name, last_name, year_in_college } = req.body;
        try {
            if(!first_name || !last_name || !year_in_college) {
                throw new Error('Please fill in all fields.');
            }

            await this.studentService.addOne(first_name, last_name, year_in_college);
            
            res.redirect('/');
        } catch (err) {
            console.error(err);
            this.view.render(res, 'createStudent', { error: err });
        }
    }
}

module.exports = PostCreateStudentController;