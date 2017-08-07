const express = require('express');
var controller = require('./recommendation.controller');
var router = express.Router();

router.get('/emotion/:id/recommendations', controller.listRecommendations);
router.get('/recommendation/:id', controller.getRecommendation);
router.get('/emotion/:id/new-recommendation', controller.createRecommendation);

module.exports = router;
