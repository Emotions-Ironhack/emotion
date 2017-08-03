const express = require('express');
var controller = require('./emotion.controller');
var router = express.Router();

const multer = require('multer');
const path = require('path');


router.get('/', controller.listUserEmotionsHistory);
router.post('/new', controller.createEmotion);


var storage = multer.diskStorage({ //multers disk storage settings
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});

//multer settings
var upload = multer({ storage: storage }).single('file');


router.post('/', function(req, res) {
  upload(req, res, function(err) {
    console.log(req.file);
    if (err) {
      res.json({
        error_code: 1,
        err_desc: err
      });
      return;
    }
    res.json({
      error_code: 0,
      err_desc: null
    });
  });
});

module.exports = router;
