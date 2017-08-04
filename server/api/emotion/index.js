const express = require('express');
var controller = require('./emotion.controller');
var router = express.Router();

router.get('/', controller.listUserEmotionsHistory);
router.post('/new', controller.createEmotion);

module.exports = router;
