const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsController');

newsRouter.get('/', newsController.index);
newsRouter.get('/:slug', newsController.show);



module.exports = newsRouter;
