const express = require('express');
var controller = require('./emotion.controller');
var router = express.Router();

router.get('/user/:userId', controller.listUserEmotions);
router.get('/:id', controller.getEmotion);
router.post('/new', controller.createEmotion);

module.exports = router;
