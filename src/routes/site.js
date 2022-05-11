const express = require('express');
const siteRouter = express.Router();

const siteController = require('../app/controllers/SiteController')
siteRouter.use('/search', siteController.search);
siteRouter.use('/home', siteController.index);
siteRouter.use('/', siteController.index);

module.exports = siteRouter;