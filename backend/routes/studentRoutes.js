const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to create a new student
router.post('/students', studentController.createStudent);

// Route to get all students
router.get('/students', studentController.getAllStudents);

// Route to get a student by ID
router.get('/students/:id', studentController.getStudentById);

// Route to update a student by ID
router.put('/students/:id', studentController.updateStudent);

// Route to delete a student by ID
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
