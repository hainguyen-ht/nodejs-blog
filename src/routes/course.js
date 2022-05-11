const express = require('express');
const CoursesRouter = express.Router();

const coursesController = require('../app/controllers/CoursesController');

CoursesRouter.get('/:slug', coursesController.show);
CoursesRouter.get('/', coursesController.index);




module.exports = CoursesRouter;
