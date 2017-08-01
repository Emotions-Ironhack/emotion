const express = require('express');
var controller = require('./emotion.controller');
const upload = require('../../config/multer');
var router = express.Router();

router.get('/:user_id' , controller.listUserEmotionsHistory);
router.post('/:user_id/new', upload.single('file'),  controller.createEmotion);

module.exports = router;
