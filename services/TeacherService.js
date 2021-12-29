const Teacher = require('../models/Teacher');
const dbConnection = require('../config/database');

class TeacherService {
    async getAll() {
        let query = "SELECT * FROM teachers";
        return await dbConnection.promise().query(query);
    }

    async addOne(title, firstName, lastName) {
        let teacher = new Teacher(title, firstName, lastName);
        let query = "INSERT INTO teachers(title, first_name, last_name) VALUES (?)";

        let res = await dbConnection.promise().query(query, [[teacher.title, teacher.firstName, teacher.lastName]]);
        return res;
    }
}

module.exports = new TeacherService();