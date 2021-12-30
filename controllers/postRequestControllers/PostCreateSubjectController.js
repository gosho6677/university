const View = require("../../core/View");
const SubjectService = require("../../services/SubjectService");

class PostCreateSubjectController {
    constructor() {
        this.subjectService = new SubjectService();
        this.view = new View();
    }

    async controller(req, res) {
        let { name, credits, teacherId } = req.body;

        try {
            await this.subjectService.addOne(name, credits, teacherId);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.render('createSubject', { error: err });
        }
    }
}

module.exports = PostCreateSubjectController;