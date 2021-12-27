CREATE DATABASE IF NOT EXISTS university;
USE university;

CREATE TABLE students (
	student_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    year_in_college SMALLINT NOT NULL,
    PRIMARY KEY (student_id)
);

CREATE TABLE teachers (
	teacher_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (teacher_id)
);

CREATE TABLE subjects (
	subject_id INT NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    credits TINYINT NOT NULL,
    fk_teacher_id INT,
    PRIMARY KEY (subject_id),
    FOREIGN KEY (fk_teacher_id) REFERENCES teachers(teacher_id)
);

CREATE TABLE enrollments (
	fk_student_id INT,
    fk_subject_id INT,
    FOREIGN KEY (fk_student_id) REFERENCES students(student_id),
    FOREIGN KEY (fk_subject_id) REFERENCES subjects(subject_id)
);


