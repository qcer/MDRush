var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('pages/index', {
    });
});
