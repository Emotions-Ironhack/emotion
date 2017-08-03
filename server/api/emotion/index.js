const express = require('express');
var controller = require('./emotion.controller');
const upload = require('../../config/multer');
var router = express.Router();

router.get('/' , controller.listUserEmotionsHistory);
router.post('/new', upload.single('file'),  controller.createEmotion);

module.exports = router;
