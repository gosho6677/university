const Subject = require('../models/Subject');
const dbConnection = require('../config/database');

class SubjectService {
    async addOne(name, credits, teacherId) {
        let subject = new Subject(name, Number(credits), Number(teacherId));
        let query = "INSERT INTO subjects(name, credits, fk_teacher_id) VALUES (?, (SELECT teacher_id FROM teachers WHERE teacher_id = ?))";
        console.log(subject);
        return await dbConnection.promise().query(query, [[subject.name, subject.credits], subject.teacherId]);
    }
}

module.exports = SubjectService;