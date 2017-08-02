const express = require('express');
var controller = require('./recommendation.controller');
var router = express.Router();

router.get('/:emotion_id' , controller.listUserRecommendations);
router.post('/:emotion_id' , controller.createRecommendation);

module.exports = router;
