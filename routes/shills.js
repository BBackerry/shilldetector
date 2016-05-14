var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Shill = require('../models/Shill.js');

router.get('/', function(req, res, next) {
  Shill.find(function (err, shills) {
    if (err) return next(err);
    res.json(shills);
  });
});

router.get('/:id', function(req, res, next) {
	Shill.findOne({name:req.params.id}, function(err, shill) {
		if (err) return next(err);
		res.json(shill);
	});
});

router.post('/', function(req, res, next) {
	Shill.create({
		name: req.body.name,
		score: req.body.score
	},
	function(err, shill) {
		if (err) return next(err);
		console.log('created:' + shill);
		res.json(shill);
	});
});

router.put('/score/up/:id', function(req, res, next) {
	Shill.findOne({name: req.params.id}, function(err, shill) {
		if (err) return next(err);
		shill.score += 1;
		shill.save(function() {
			res.json(shill);
		});
	});
});

router.put('/score/down/:id', function(req, res, next) {
	Shill.findOne({name: req.params.id}, function(err, shill) {
		if (err) return next(err);
		shill.score -= 1;
		shill.save(function() {
			res.json(shill);
		});
	});
});


module.exports = router;
