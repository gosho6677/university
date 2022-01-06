const View = require("../../core/View");
const Subject = require("../../models/Subject");
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
            let subject = new Subject(name, Number(credits), Number(teacherId));

            await this.subjectService.addOne(subject);
            res.redirect('/');
        } catch (err) {
            console.error(err);

            let [rows] = await this.teacherService.getAll();
            res.render('createSubject', { error: err, teachers: rows });
        }
    }
}

module.exports = PostCreateSubjectController;