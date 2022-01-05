const View = require("../../core/View");
const SubjectService = require("../../services/SubjectService");
const TeacherService = require("../../services/TeacherService");

class PostCreateSubjectController {
    constructor() {
        this.subjectService = new SubjectService();
        this.teacherService = new TeacherService();
        this.view = new View();
    }

    async controller(req, res) {
        let { name, credits, teacherId } = req.body;

        try {
            if(!name || !credits || !teacherId) {
                throw new Error('Please fill all required fields.');
            }

            await this.subjectService.addOne(name, credits, teacherId);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            let [rows] = await this.teacherService.getAll();
            res.render('createSubject', { error: err, teachers: rows });
        }
    }
}

module.exports = PostCreateSubjectController;