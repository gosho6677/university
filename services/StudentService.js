const Student = require('../models/Student');
const dbConnection = require('../config/database');

class StudentService {
    async getAll() {
        let query = "SELECT * FROM students ORDER BY first_name, last_name";
        return await dbConnection.promise().query(query);
    }

    async addOne(firstName, lastName, yearInCollege) {
        let student = new Student(firstName, lastName, Number(yearInCollege));
        let query = "INSERT INTO students(first_name, last_name, year_in_college) VALUES (?)";

        let res = await dbConnection.promise().query(query, [[student.firstName, student.lastName, student.yearInCollege]]);
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

        return await dbConnection.promise().query(query);
    }
}

// let test = new StudentService();
// test.addOne('Georgi', 'Palovakisss', 2)
//     .then(res => console.log(res));

module.exports = StudentService;