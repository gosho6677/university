const Teacher = require('../models/Teacher');
const Database = require('../config/Database');

class TeacherService {
    constructor() {
        this.dbConnection = new Database().connect();
    }

    async getAll() {
        let query = (`
            SELECT teacher_id, title, CONCAT(first_name, ' ', last_name) as full_name
            FROM teachers;`
        );
        return await this.dbConnection.promise().query(query);
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
        return await this.dbConnection.promise().query(query);
    }

    async getWithSubjects() {
        let query = `
            SELECT CONCAT(t.first_name, ' ', t.last_name) as full_name, sub.name, COUNT(st.student_id) as total_enrolled_students
            FROM enrollments e, teachers t, subjects sub, students st
            WHERE st.student_id = e.fk_student_id AND sub.subject_id = fk_subject_id AND sub.fk_teacher_id = t.teacher_id
            GROUP BY t.teacher_id, sub.subject_id
            ORDER BY full_name, sub.name;
        `;

        return await this.dbConnection.promise().query(query);
    }

    async getTopThree() {
        let query = `
            SELECT CONCAT(t.first_name, ' ', t.last_name) as full_name, COUNT(DISTINCT st.student_id) as total_students
            FROM enrollments e, students st, teachers t, subjects sub
            WHERE st.student_id = e.fk_student_id AND sub.subject_id = fk_subject_id AND sub.fk_teacher_id = t.teacher_id
            GROUP BY t.teacher_id
            ORDER BY total_students DESC
            LIMIT 3;
        `;

        return await this.dbConnection.promise().query(query);
    }

    async addOne(title, firstName, lastName) {
        let teacher = new Teacher(title, firstName, lastName);
        let query = "INSERT INTO teachers(title, first_name, last_name) VALUES (?)";

        let res = await this.dbConnection.promise().query(query, [[teacher.title, teacher.firstName, teacher.lastName]]);
        return res;
    }
}

module.exports = TeacherService;