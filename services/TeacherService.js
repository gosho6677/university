const Teacher = require('../models/Teacher');
const dbConnection = require('../config/database');

class TeacherService {
    async getAll() {
        let query = (`
            SELECT teacher_id, title, CONCAT(first_name, ' ', last_name) as full_name
            FROM teachers;`
        );
        return await dbConnection.promise().query(query);
    }

    async getAllWithTaughtSubjects() {
        let query = (`
            SELECT t.title, t.first_name, t.last_name, COUNT(s.subject_id) as taughtSubjects
            FROM teachers t 
            LEFT JOIN subjects s
            ON t.teacher_id = s.fk_teacher_id
            GROUP BY t.teacher_id
            ORDER BY t.first_name, t.last_name;`
        );
        return await dbConnection.promise().query(query);
    }

    async addOne(title, firstName, lastName) {
        let teacher = new Teacher(title, firstName, lastName);
        let query = "INSERT INTO teachers(title, first_name, last_name) VALUES (?)";

        let res = await dbConnection.promise().query(query, [[teacher.title, teacher.firstName, teacher.lastName]]);
        return res;
    }
}

module.exports = TeacherService;