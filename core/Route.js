const AllRecordsRoute = require("../routes/AllRecordsRoute");
const GetCreateStudentRoute = require("../routes/GetCreateStudentRoute");
const GetCreateSubjectRoute = require("../routes/GetCreateSubjectRoute");
const GetCreateTeacherRoute = require("../routes/GetCreateTeacherRoute");
const GetStudentsAndDisciplinesRoute = require("../routes/GetStudentsAndDisciplinesRoute");
const PostCreateStudentRoute = require("../routes/PostCreateStudentRoute");
const PostCreateSubjectRoute = require("../routes/PostCreateSubjectRoute");
const PostCreateTeacherRoute = require("../routes/PostCreateTeacherRoute");

class Route {
    init() {
        return [
            // get req routes
            new AllRecordsRoute().route(),
            new GetCreateStudentRoute().route(),
            new GetCreateTeacherRoute().route(),
            new GetCreateSubjectRoute().route(),
            new GetStudentsAndDisciplinesRoute().route(),
            // post req routes
            new PostCreateStudentRoute().route(),
            new PostCreateTeacherRoute().route(),
            new PostCreateSubjectRoute().route(),
        ];
    }
}

module.exports = Route;