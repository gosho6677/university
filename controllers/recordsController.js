const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('allRecords');
});

router.get('/create/student', (req, res) => {
    res.render('createStudent');
});

router.get('/create/teacher', (req, res) => {
    res.render('createTeacher');
});

router.get('/create/subject', (req, res) => {
    res.render('createSubject');
});

router.get('/students-and-disciplines', (req, res) => {
    res.render('studentsAndDisciplines');
});

router.get('/students-and-credits', (req, res) => {
    res.render('studentsAndCredits');
});

router.get('/teachers-and-subjects', (req, res) => {
    res.render('teachersAndSubjects');
});

router.get('/most-enrolled-subjects', (req, res) => {
    res.render('mostEnrolledSubjects');
});

router.get('/top-three-teachers', (req, res) => {
    res.render('topThreeTeachers');
});

module.exports = router;