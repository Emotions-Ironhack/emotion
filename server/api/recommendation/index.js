const express = require('express');
var controller = require('./recommendation.controller');
var router = express.Router();

router.get('/');

module.exports = router;
