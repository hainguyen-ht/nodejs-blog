const Course = require('../models/Course');
const handlerHelper = require('../util/mongoose');

class CoursesController{
    index = (req,res,next) => res.send('CoursesController.index');
    show = (req,res,next) => {
        let slug = req.params.slug;
        Course.findOne({
            _id: slug
        })
        .then(course => {
            res.render('detail', {
                course: handlerHelper.singleArrayConvert(course)
            })
        })
        .catch(error => next(error))
    }
}
module.exports = new CoursesController();