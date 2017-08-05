const express = require('express');
var controller = require('./recommendation.controller');
var router = express.Router();

router.get('/user/:userId', controller.listRecommendations);
router.get('/:id', controller.getRecommendation);
router.post('/new', controller.createRecommendation);

module.exports = router;
