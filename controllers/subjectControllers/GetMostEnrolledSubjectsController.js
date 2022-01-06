const View = require("../../core/View");
const SubjectService = require("../../services/SubjectService");

class GetMostEnrolledSubjectsController {
    constructor() {
        this.subjectService = new SubjectService();
        this.view = new View();
    }

    async controller(req, res) {
        let [rows] = await this.subjectService.getMostEnrolledSubjects();
        
        this.view.render(res, 'mostEnrolledSubjects', { subjects: rows });
    }
}

module.exports = GetMostEnrolledSubjectsController;