const router = require('express').Router();
const studentService = require('../services/StudentService');
const teacherService = require('../services/TeacherService');
const subjectService = require('../services/SubjectService');

router.get('/', async (req, res) => {
    let [students, teachers] = await Promise.all([studentService.getAll(), teacherService.getAll()]);
    
    res.render('allRecords', { students: students[0], teachers: teachers[0] });
});

router.get('/create/student', (req, res) => {
    res.render('createStudent');
});

router.post('/create/student', async (req, res) => {
    let { first_name, last_name, year_in_college } = req.body;
    try {
        await studentService.addOne(first_name, last_name, year_in_college);
        res.redirect('/records');
    } catch (err) {
        console.error(err);
        res.render('createStudent', { error: err });
    }
});

router.get('/create/teacher', (req, res) => {
    res.render('createTeacher');
});

router.post('/create/teacher', async (req, res) => {
    let { title, first_name, last_name } = req.body;

    try {
        await teacherService.addOne(title, first_name, last_name);
        res.redirect('/records');
    } catch (err) {
        console.error(err);
        res.render('createTeacher', { error: err });
    }
});

router.get('/create/subject', async (req, res) => {
    let [rows] = await teacherService.getAll();
    
    res.render('createSubject', { teachers: rows });
});

router.post('/create/subject', async (req, res) => {
    let { name, credits, teacherId } = req.body;

    try {
        await subjectService.addOne(name, credits, teacherId);
        res.redirect('/records');
    } catch (err) {
        console.error(err);
        res.render('createSubject', { error: err });
    }
});

router.get('/students-and-disciplines', async (req, res) => {
    let [rows] = await studentService.getAllWithDisciplines();
    
    res.render('studentsAndDisciplines', { students: rows });
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