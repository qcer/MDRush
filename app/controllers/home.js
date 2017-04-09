var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  marked = require('marked');

module.exports = function (app) {
  app.use('/', router);
};

var tuto_base_path = "./tutorial/tutorial.md";

router.get('/', function (req, res, next) {
	var tutorial = marked(fs.readFileSync(tuto_base_path,"utf8"))
    res.render('pages/index', {
    	tutorial:tutorial
    });
});
