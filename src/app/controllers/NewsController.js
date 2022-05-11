const Course = require("../models/Course");

class NewsController{
    index = (req, res, next) => {
        Course.find({})
            .then( course => {
                course = course.map(course => course.toObject())
                res.render('news', { course })
            })
            .catch(error => next(error));
    };
    show = (req, res) => res.send('heello show');

}

module.exports = new NewsController;