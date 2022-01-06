const AllRecordsRoute = require("../routes/AllRecordsRoute");
const GetCreateStudentRoute = require("../routes/studentRoutes/GetCreateStudentRoute");
const GetRemoveFromDisciplineRoute = require("../routes/studentRoutes/GetRemoveFromDisciplineRoute");
const GetCreateSubjectRoute = require("../routes/subjectRoutes/GetCreateSubjectRoute");
const GetMostEnrolledSubjectsRoute = require("../routes/subjectRoutes/GetMostEnrolledSubjectsRoute");
const PostCreateSubjectRoute = require("../routes/subjectRoutes/PostCreateSubjectRoute");
const GetCreateTeacherRoute = require("../routes/teacherRoutes/GetCreateTeacherRoute");
const GetTeachersAndSubjectsRoute = require("../routes/teacherRoutes/GetTeachersAndSubjectsRoute");
const GetTopThreeTeachersRoute = require("../routes/teacherRoutes/GetTopThreeTeachersRoute");
const PostCreateTeacherRoute = require("../routes/teacherRoutes/PostCreateTeacherRoute");
const GetStudentsAndDisciplinesRoute = require("../routes/studentRoutes/GetStudentsAndDisciplinesRoute");
const GetStudentsAndCreditsRoute = require("../routes/studentRoutes/GetStudentsAndCreditsRoute");
const GetEnrollStudentRoute = require("../routes/studentRoutes/GetEnrollStudentRoute");
const PostCreateStudentRoute = require("../routes/studentRoutes/PostCreateStudentRoute");
const PostEnrollStudentRoute = require("../routes/studentRoutes/PostEnrollStudentRoute");
const PostRemoveFromDisciplineRoute = require("../routes/studentRoutes/PostRemoveFromDiscipline");
const NotFoundRoute = require("../routes/NotFoundRoute");

class Route {
    init() {
        let routes = [
            // get req routes
            new AllRecordsRoute(),
            new GetCreateStudentRoute(),
            new GetCreateTeacherRoute(),
            new GetCreateSubjectRoute(),
            new GetStudentsAndDisciplinesRoute(),
            new GetStudentsAndCreditsRoute(),
            new GetEnrollStudentRoute(),
            new GetRemoveFromDisciplineRoute(),
            new GetMostEnrolledSubjectsRoute(),
            new GetTopThreeTeachersRoute(),
            new GetTeachersAndSubjectsRoute(),
            // post req routes
            new PostCreateStudentRoute(),
            new PostCreateTeacherRoute(),
            new PostCreateSubjectRoute(),
            new PostEnrollStudentRoute(),
            new PostRemoveFromDisciplineRoute(),
            new NotFoundRoute(),
        ];

        return routes.map(r => r.route());
    }
}

module.exports = Route;