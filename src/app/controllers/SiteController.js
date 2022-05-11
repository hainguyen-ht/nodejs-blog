const handlerHelper = require('../util/mongoose');
const Course = require("../models/Course");

class SiteController{
    index = (req, res, next) => {
        Course.find({})
        .then(course => res.render('home', {
            courses: handlerHelper.arrayObjectConvert(course)
        }))
        .catch(error => next(error))
    };
    search = (req, res) => res.render('search');
}
module.exports = new SiteController;    
