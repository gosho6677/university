const Database = require('../config/Database');

class SubjectService {
    constructor() {
        this.dbConnection = new Database().connect();
    }

    async addOne({ name, credits, teacherId }) {
        let query = "INSERT INTO subjects(name, credits, fk_teacher_id) VALUES (?, (SELECT teacher_id FROM teachers WHERE teacher_id = ?))";

        return await this.dbConnection.promise().query(query, [[name, credits], teacherId]);
    }

    async getAvailableSubjects(studentId) {
        // TEST THIS QUERY AGAIN!
        let query = `
            SELECT subject_id, name, credits
            FROM subjects
            WHERE subject_id NOT IN (
	            SELECT sub.subject_id
	            FROM students st, enrollments e, subjects sub
	            WHERE st.student_id = e.fk_student_id AND sub.subject_id = e.fk_subject_id AND st.student_id = ?
            );
        `;

        return await this.dbConnection.promise().query(query, [Number(studentId)]);
    }

    async getEnrolledSubjects(studentId) {
        let query = `
            SELECT sub.subject_id, sub.name, sub.credits
            FROM students st, enrollments e, subjects sub
            WHERE st.student_id = e.fk_student_id AND sub.subject_id = e.fk_subject_id AND st.student_id = ?;
        `;

        return await this.dbConnection.promise().query(query, [Number(studentId)]);
    }

    async getMostEnrolledSubjects() {
        let query = `
            SELECT sub.name, COUNT(st.student_id) as total_students
            FROM enrollments e, students st, subjects sub
            WHERE st.student_id = e.fk_student_id AND sub.subject_id = e.fk_subject_id
            GROUP BY sub.subject_id
            ORDER BY total_students DESC, sub.name
            LIMIT 3;
        `;

        return await this.dbConnection.promise().query(query);
    }
}

module.exports = SubjectService;