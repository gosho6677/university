const Student = require('../models/Student');
const Database = require('../config/Database');

class StudentService {
    constructor() {
        this.dbConnection = new Database().connect();
    }
    
    async getAll() {
        let query = "SELECT * FROM students ORDER BY first_name, last_name";
        return await this.dbConnection.promise().query(query);
    }

    async getById(id) {
        let query = `
            SELECT student_id, first_name, last_name
            FROM students
            WHERE student_id = ?;
        `;

        return await this.dbConnection.promise().query(query, [Number(id)]);
    }

    async addOne(firstName, lastName, yearInCollege) {
        let student = new Student(firstName, lastName, Number(yearInCollege));
        let query = "INSERT INTO students(first_name, last_name, year_in_college) VALUES (?)";

        let res = await this.dbConnection.promise().query(query, [[student.firstName, student.lastName, student.yearInCollege]]);
        return res;
    }

    async getAllWithDisciplines() {
        let query = `
            SELECT s.student_id,
                CONCAT(s.first_name, ' ', s.last_name) as full_name,
                GROUP_CONCAT(sub.name SEPARATOR ', ') as enrolledSubjects
            FROM students s
            LEFT JOIN enrollments e
            ON s.student_id = e.fk_student_id
            LEFT JOIN subjects sub
            ON sub.subject_id = fk_subject_id
            GROUP BY student_id;
        `;

        return await this.dbConnection.promise().query(query);
    }

    async getAllWithCredits() {
        let query = `
            SELECT CONCAT(st.first_name, ' ', st.last_name) as full_name,
            SUM(sub.credits) as total_credits
            FROM students st
            LEFT JOIN enrollments e
            ON st.student_id = e.fk_student_id
            LEFT JOIN subjects sub
            ON sub.subject_id = e.fk_subject_id
            GROUP BY st.student_id
            ORDER BY full_name;
        `;

        return await this.dbConnection.promise().query(query);
    }

    async enrollToDiscipline(studentId, subjectId) {
        let query = `
            INSERT INTO enrollments(fk_student_id, fk_subject_id)
            VALUES(
                (SELECT student_id FROM students WHERE student_id = ?),
                (SELECT subject_id FROM subjects WHERE subject_id = ?)
            );
        `;

        return await this.dbConnection.promise().query(query, [Number(studentId), Number(subjectId)]);
    }

    async removeFromDiscipline(studentId, subjectId) {
        let query = `
            DELETE FROM enrollments
            WHERE fk_student_id = ? AND fk_subject_id = ?;
        `;

        return await this.dbConnection.promise().query(query, [Number(studentId), Number(subjectId)]);
    }
}

module.exports = StudentService;