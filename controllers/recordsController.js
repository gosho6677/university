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

module.exports = router;