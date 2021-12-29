const Student = require('../models/Student');
const dbConnection = require('../config/database');

class StudentService {
    async getAll() {
        let query = "SELECT * FROM students";
        return await dbConnection.promise().query(query);
    }

    async addOne(firstName, lastName, yearInCollege) {
        let student = new Student(firstName, lastName, Number(yearInCollege));
        let query = "INSERT INTO students(first_name, last_name, year_in_college) VALUES (?)";

        let res = await dbConnection.promise().query(query, [[student.firstName, student.lastName, student.yearInCollege]]);
        return res;
    }
}

// let test = new StudentService();
// test.addOne('Georgi', 'Palovakisss', 2)
//     .then(res => console.log(res));

module.exports = new StudentService();