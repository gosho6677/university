const AllRecordsRoute = require("../routes/AllRecordsRoute");
const GetCreateStudentRoute = require("../routes/GetCreateStudentRoute");
const GetCreateSubjectRoute = require("../routes/GetCreateSubjectRoute");
const GetCreateTeacherRoute = require("../routes/GetCreateTeacherRoute");
const GetEnrollStudentRoute = require("../routes/GetEnrollStudentRoute");
const GetMostEnrolledSubjectsRoute = require("../routes/GetMostEnrolledSubjectsRoute");
const GetRemoveFromDisciplineRoute = require("../routes/GetRemoveFromDisciplineRoute");
const GetStudentsAndCreditsRoute = require("../routes/GetStudentsAndCreditsRoute");
const GetStudentsAndDisciplinesRoute = require("../routes/GetStudentsAndDisciplinesRoute");
const GetTeachersAndSubjectsRoute = require("../routes/GetTeachersAndSubjectsRoute");
const GetTopThreeTeachersRoute = require("../routes/GetTopThreeTeachersRoute");
const NotFoundRoute = require("../routes/NotFoundRoute");
const PostCreateStudentRoute = require("../routes/PostCreateStudentRoute");
const PostCreateSubjectRoute = require("../routes/PostCreateSubjectRoute");
const PostCreateTeacherRoute = require("../routes/PostCreateTeacherRoute");
const PostEnrollStudentRoute = require("../routes/PostEnrollStudentRoute");
const PostRemoveFromDisciplineRoute = require("../routes/PostRemoveFromDiscipline");

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
            // not found route
            new NotFoundRoute(),
        ];

        return routes.map(r => r.route());
    }
}

module.exports = Route;