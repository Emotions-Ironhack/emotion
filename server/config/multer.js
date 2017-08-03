const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
//
// const upload   = multer({ storage });
// module.exports = upload;



// var storage = multer.diskStorage({ //multers disk storage settings
//   destination: function(req, file, cb) {
//     cb(null, './public/uploads/');
//   },
//   filename: function(req, file, cb) {
//     var datetimestamp = Date.now();
//     cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
//   }
// });
//
// //multer settings
// var upload = multer({ storage: storage }).single('file');
//
// module.exports = upload;
